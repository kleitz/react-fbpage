'use strict';

const FONT_SIZE = '1rem';
const BORDER_RADIUS = '.25rem';

export default {
    container: (state) => {
        const width = state.width || 100;
        return {
            width: `${width}%`,
            marginLeft: `-${width / 2}%`,
            position: 'absolute',
            left: '50%'
        };
    },
    form: {
        textAlign: 'center',
        padding: '20px 20px 5px 0px',
        backgroundColor: '#f7f7f9',
        marginBottom: '20px',
        border: 'solid 1px #E2E2E2'
    },
    fieldset: {
        margin: '0 0 15px 0',
        border: 0,
        padding: 0
    },
    label: {
        marginRight: '10px'
    },
    input: {
        text: {
            padding: '.375rem .75rem',
            fontSize: FONT_SIZE,
            lineHeight: '1.5',
            color: '#55595c',
            backgroundColor: '#fff',
            border: '.0625rem solid #ccc',
            borderRadius: `${BORDER_RADIUS} 0 0 ${BORDER_RADIUS}`,
            margin: 0,
            verticalAlign: 'middle'
        },
        range: {
            verticalAlign: 'middle'
        },
        button: {
            display: 'inline-block',
            padding: '.375rem 1rem',
            fontSize: FONT_SIZE,
            fontWeight: '400',
            lineHeight: '1.5',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            cursor: 'pointer',
            border: '.0625rem solid transparent',
            borderRadius: `0 ${BORDER_RADIUS} ${BORDER_RADIUS} 0`,
            color: '#fff',
            backgroundColor: '#0275d8',
            borderColor: '#0275d8',
            margin: 0
        }
    }
};
