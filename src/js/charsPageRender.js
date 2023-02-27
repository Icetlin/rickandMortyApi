import {onClickOrigin} from './charsOriginOnClick.js'
import createCharsTable from './createCharsTable.js'
export const charsPageRender = (chars) => {
    const table = createCharsTable(chars, onClickOrigin);

    document.body.querySelector('table')?.remove();
    document.querySelector('p')?.remove();
    document.body.append(table)
}