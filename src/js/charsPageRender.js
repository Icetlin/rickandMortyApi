import {onClickOrigin} from './charsOriginOnClick.js'
import createCharsTable from './createCharsTable.js'
export const charsPageRender = (chars) => {
    const table = createCharsTable(chars, onClickOrigin);
    document.body.querySelector('table')?.remove();
    document.body.append(table)

    history.replaceState(null, '', `?page=${document.body.querySelector('table').dataset.originApiPage}`)

}