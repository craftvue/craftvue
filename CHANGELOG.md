# Changelog

## [1.4.6](https://www.npmjs.com/package/craftvue/v/1.4.6) (2025-12-27)

#### Bug fixes

- Fixed paths for components in `OverviewComponents.vue`

#### Refactors

- Updated repository URLs to craftvue organization
- Updated README file for `craftvue`

## [1.4.0](https://www.npmjs.com/package/craftvue/v/1.4.0) (2025-12-26)

#### Features

- Added components: `CCheckbox`, `CCheckboxGroup`, `CRadio`, `CRadioGroup`, `CSwitch`, `CConfirmPopup`, `CConfirmDialog`, `Dialog`, `Popover`, `Tag`
- Added entry points and exports for `Checkbox`, `CheckboxGroup`, `Radio`, `RadioGroup`, `Switch`, `Tag`, `Dialog`, `ConfirmDialog`, `ConfirmPopup`, `Popover` components in `package.json`
- Added entry points for new components in `vite.config.ts`
- Added new components to resolver for auto-import: `checkbox`, `checkbox-group`, `radio`, `radio-group`, `switch`, `tag`, `dialog`, `confirm-dialog`, `confirm-popup`, `popover`
- Extended `error` slot scope in `CFormItem` with `errorClass` property
- Added `durationEnter` and `durationLeave` props to `CFormItem` for error message animation control
- Added new icon support in `CIcon`: `minus`, `error`, `info`, `maximize`, `minimize`, `warning`
- Exposed `close`, `open` and `isOpen` methods from `CPopup` component
- Added `close` aria-label to accessibility constants
- Added new base color variables: `--c-info-color`, `--c-warning-color`, `--c-error-color`, `--c-success-color`  
- Added CSS variables for `Checkbox`, `Radio`, `Switch`, `Popover`, `ConfirmPopup`, `Dialog`, `ConfirmDialog` and `Tag` components

#### Bug fixes

- Changed `FormItem` export path from `form-item` to `formitem` in `package.json`
- Fixed condition visibility of error message in `showError` computed
- Added base class `c-dropdown` for `CDropdown`
- Fixed `CTooltip` to apply base class `c-tooltip` and correctly render `trigger`/`default` slots

#### Refactors

- Refactored `CFormItem` error display: changed from absolute positioning to flex layout with custom animation
- Changed `font-size` property value for label of `CFormItem`
- Updated `CPopup` to use `inheritAttrs: false`
- Removed deprecated `zoom-in-top` transition classes from global styles
- Updated component exports in `src/components/index.ts` to include new components
- Added style imports for new components in `styles/index.scss`
- Updated dependency `@craftvue/icons` to `1.3.0`

## [1.3.1](https://www.npmjs.com/package/craftvue/v/1.3.1) (2025-11-06)

#### Bug fixes

- Fixed auto-import for `CTabList`, `CTabPanels`, `CTabPanel` components in resolver

## [1.3.0](https://www.npmjs.com/package/craftvue/v/1.3.0) (2025-11-06)

#### Features

- Added default exports for all components
- Added `c` prefix for style vars

#### Refactors

- Added dynamic import of icons in `CIcon` component
- Added `Tab`, `TabList`, `TabPanels`, `TabPanel` directories
- Added entry points for `tab`, `tablist`, `tabpanels`, `tabpanel` components
- Changed imports in `README`

## [1.2.1](https://www.npmjs.com/package/craftvue/v/1.2.1) (2025-11-05)

#### Bug fixes

- Added support for component refs in `CPopup` `rootEl` prop

## [1.2.0](https://www.npmjs.com/package/craftvue/v/1.2.0) (2025-11-05)

#### Features

- Added `CPopup`, `CDropdown`, `CTooltip`, `CSelect` components
- Added `tryOnScopeDispose` and `tryGetFieldData` functions in utils
- Added style vars in \_vars.scss
- Added `useResizeObserver` and `useIntersectionObserver` composables

#### Bug fixes

- Added `break` operator for `CTab`

#### Refactors

- Updated dependency `@craftvue/icons` to `1.2.0`
- Updated type of `findSingle` function in utils
- Removed `CButton.spec.ts` file
- Updated README file for `craftvue`

## [1.1.1](https://www.npmjs.com/package/craftvue/v/1.1.1) (2025-10-16)

#### Bug fixes

- Changed dependency `@craftvue/icons` to `1.1.3`

## [1.1.0](https://www.npmjs.com/package/craftvue/v/1.1.0) (2025-10-15)

#### Features

- Added resolver components in `craftvue` for automatically import components
- Added support of putting styles on root element in `CInput`
- Added `useAttrs` composable

#### Bug fixes

- Changed styles for `CTabs` component
- Fix styles for different states of `CInput`
- Setting sizes for shallow SVGs in `CIcon`
- Added support for string values for `value` and `max` props in `CBadge`

#### Refactors

- Added interface `IconSlots` in `CIcon` component
- Added default value for required prop in `CFormItem` component
- Added interface `FormItemSlots` in `CFormItem`
- Renamed prop `label` to `labelSlot` in `CFormItem` component
- Changed padding in styles for `CBadge`
- Added interface `BadgeSlots` in `CBadge`
- Renamed slot `value` to `content` in `CBadge` component
- Removed `BadgeSeverity` type from `CBadge`
- Reduced `border-radius` for `CButton` and `CInput`
- Added `BaseButtonProps` interface for `CButton`
- Added `BaseInputProps` and `InputSlots` interfaces for `CInput`
- Removed default values for `icon`, `size` and `label` props in `CButton`
- Changed `disabled` computed property in `CButton`
- Added default value for props in `CInput`
- Added categories files for utils

## [1.0.4](https://www.npmjs.com/package/craftvue/v/1.0.4) (2025-09-30)

#### Features

- Added scripts for publishing, development and building (production)
- Added variables for fonts in `styles/_vars.scss`

#### Bug fixes

- Changed global styles in `styles/_style.scss`

#### Refactors

- Remove function `capitalizeFirstLetter` from utils
- Remove font Montserrat from assets
- Remove `styles/_fonts.scss`

## [1.0.3](https://www.npmjs.com/package/craftvue/v/1.0.3) (2025-09-29)

#### Bug fixes

- Changed `@craftvue/icons` dependency to `1.0.0` for production

## [1.0.0](https://www.npmjs.com/package/craftvue/v/1.0.0) (2025-09-28)

#### Features

- Initial release
- `@craftvue/icons` and `craftvue` packages added
- Added `CButton`, `CInput`, `CBadge`, `CIcon`, `CTabs`, `CTabList`, `CTab`, `CFormItem` components
