import PropTypes from 'prop-types'
import Head from 'next/head'

const NodeBird= ({Component}) => {
    return <div>
        <Component />
    </div>
    
}

NodeBird.PropTypes = {
    Component: PropTypes.elementType.isRequired
}
export default NodeBird;