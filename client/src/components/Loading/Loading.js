import React from 'react'


// const useStyles = makeStyles(theme => ({
//     loadingContainer: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'fixed',
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//         backgroundColor: 'rgba(0, 0, 0, .6)',
//         zIndex: 1500,
//     },
//     loading: {
//         display: 'flex',
//         flexFlow: 'row nowrap',
//         alignItems: 'center',
//     },
//     loadingIcon: {
//         display: 'block',
//         width: theme.spacing(8),
//         height: theme.spacing(8),
//         borderRadius: '50%',
//         border: '6px solid #FFF',
//         borderColor: '#FFF transparent #FFF transparent',
//         animation: '$loadingRing 1.2s linear infinite',
//     },
//     loadingText: {
//         marginLeft: theme.spacing(4),
//         color: '#FFF',
//         fontSize: theme.spacing(4),
//     },
//     '@keyframes loadingRing': {
//         '0%': {
//             transform: 'rotate(0deg)',
//         },
//         '100%': {
//             transform: 'rotate(360deg)',
//         },
//     },
// }))

const Loading = () => {
    return (
        <div>
            <div>
                <div className="loading-icon"></div>
                <div className="loading-text">Loading ...</div>
            </div>
        </div>
    )
}

export default Loading