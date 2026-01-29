import { useEffect, useState } from 'react'
import { capitalizeFirstLetter } from 'docs/utils'
import type {
  CustomSourceProps,
  CodeModule,
  CodeData,
  AllStoryNames,
  UIComponentType,
} from './CustomSource.types'
import './style.scss'
import { format } from 'prettier'
import prettierPluginBabel from 'prettier/plugins/babel'
import prettierPluginEstree from 'prettier/plugins/estree'
import prettierPluginHtml from 'prettier/plugins/html'
import prettierPluginMarkdown from 'prettier/plugins/markdown'
import * as parserPostCSS from 'prettier/parser-postcss'
import type { Options } from 'prettier'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const CustomSource = ({
  name = 'basic' as AllStoryNames,
  type = '' as UIComponentType,
  actions = ['copy', 'full', 'download'],
  code: codeRoot,
  language = 'xml',
  parser = 'vue',
  printWidth = 100,
}: CustomSourceProps) => {
  const [codeData, setCodeData] = useState<CodeData | null>(null)
  const [isFull, setIsFull] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const getCodeTexts = async () => {
    try {
      setError(null)

      const module: CodeModule = await import(
        `docs/stories/${capitalizeFirstLetter(type)}/codes.ts`
      )

      const texts = module.default
      const code = texts[name]

      if (code) {
        const formattedCode: CodeData = {
          simple: await formatCode(code.simple),
          full: await formatCode(code.full),
        }
        setCodeData(formattedCode)
      } else {
        setError(`Код для истории "${name}" не найден в компоненте "${type}"`)
      }
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'Неизвестная ошибка'
      setError(`Ошибка загрузки кода для компонента "${type}": ${errorMessage}`)
      console.error('Ошибка при загрузке кодов:', e)
    }
  }

  const formatCode = async (code: string): Promise<string> => {
    try {
      if (language === 'bash' || parser === 'bash') {
        return code.trim()
      }

      const prettierOptions: Options = {
        semi: true,
        singleQuote: true,
        printWidth: printWidth,
        parser: parser,
        htmlWhitespaceSensitivity: 'ignore',
        vueIndentScriptAndStyle: true,
        plugins: [
          prettierPluginBabel,
          prettierPluginEstree,
          prettierPluginHtml,
          prettierPluginMarkdown,
          parserPostCSS,
        ],
      }

      let formattedCode = await format(code, prettierOptions)

      // добавление пустой строки после закрывающего тега template
      formattedCode = formattedCode.replace(
        /(<\/template>)\s*(<script[^>]*>)/gi,
        '$1\n\n$2',
      )

      return formattedCode
    } catch (e) {
      console.warn(`Ошибка форматирования кода: ${e}`)
      return code
    }
  }

  const setCodeRoot = async (code: string) => {
    const formattedCode = await formatCode(code)
    setCodeData({ simple: formattedCode, full: formattedCode })
  }

  useEffect(() => {
    if (codeRoot) {
      setCodeRoot(codeRoot)
    } else {
      getCodeTexts()
    }
  }, [type, name, codeRoot])

  const code: string = codeData
    ? isFull
      ? codeData?.full
      : codeData?.simple
    : ''

  const copy = () => navigator.clipboard.writeText(code)

  const toggleMode = () => setIsFull(!isFull)

  const download = () => {
    const link = document.createElement('a')
    link.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(code),
    )
    link.setAttribute('download', `${codeRoot ? 'code' : name}.js`)
    link.click()
  }

  const retry = () => {
    setError(null)
    setCodeData(null)
    getCodeTexts()
  }

  return (
    <div className="sb-source sb-unstyled">
      {error && (
        <div className="sb-error">
          <div className="sb-error-header">
            <div className="sb-error-title">
              <span className="sb-error-icon">⚠️</span>
              <strong>Ошибка загрузки</strong>
            </div>
            <button className="sb-error-retry" onClick={retry}>
              Повторить
            </button>
          </div>
          <div className="sb-error-message">{error}</div>
        </div>
      )}

      {!error && codeData && (
        <div>
          <SyntaxHighlighter
            className="sb-source-code"
            language={language}
            style={atomOneDark}
            showLineNumbers={isFull}
            customStyle={{ padding: '20px' }}
          >
            {code}
          </SyntaxHighlighter>

          <div className="sb-source-controls">
            {actions.includes('full') && (
              <button
                className="sb-source-btn"
                onClick={toggleMode}
                title="Переключить полный код"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.71 6.29a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 0 1.42l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L5.41 12l4.3-4.29a1 1 0 0 0 0-1.42m11 5l-5-5a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 0-1.42"
                  />
                </svg>
              </button>
            )}
            {actions.includes('copy') && (
              <button
                className="sb-source-btn"
                onClick={copy}
                title="Копировать"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21 8.94a1.3 1.3 0 0 0-.06-.27v-.09a1 1 0 0 0-.19-.28l-6-6a1 1 0 0 0-.28-.19a.3.3 0 0 0-.09 0a.9.9 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"
                  />
                </svg>
              </button>
            )}
            {actions.includes('download') && (
              <button
                onClick={download}
                className="sb-source-btn"
                title="Скачать"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
