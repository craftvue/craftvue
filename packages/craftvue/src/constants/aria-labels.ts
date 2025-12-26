export interface AriaOptions {
  trueLabel?: string
  falseLabel?: string
  nullLabel?: string
  star?: string
  stars?: string
  selectAll?: string
  unselectAll?: string
  close?: string
  previous?: string
  next?: string
  navigation?: string
  scrollTop?: string
  moveUp?: string
  moveTop?: string
  moveDown?: string
  moveBottom?: string
  moveToTarget?: string
  moveToSource?: string
  moveAllToTarget?: string
  moveAllToSource?: string
  pageLabel?: string
  firstPageLabel?: string
  lastPageLabel?: string
  nextPageLabel?: string
  prevPageLabel?: string
  rowsPerPageLabel?: string
  jumpToPageDropdownLabel?: string
  jumpToPageInputLabel?: string
  selectRow?: string
  unselectRow?: string
  expandRow?: string
  collapseRow?: string
  showFilterMenu?: string
  hideFilterMenu?: string
  filterOperator?: string
  filterConstraint?: string
  editRow?: string
  saveEdit?: string
  cancelEdit?: string
  listView?: string
  gridView?: string
  slide?: string
  slideNumber?: string
  zoomImage?: string
  zoomIn?: string
  zoomOut?: string
  rotateRight?: string
  rotateLeft?: string
  listLabel?: string
}

export const ARIA_LABELS: AriaOptions = {
  previous: 'Previous',
  next: 'Next',
  close: 'Close',
}

export const getAriaLabel = (key: keyof AriaOptions): string | undefined => ARIA_LABELS[key]
