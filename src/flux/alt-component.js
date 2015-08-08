'use strict';

import React from 'react/addons';

class AltStoreComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = this.getPropsFromStores(this.props, this.context);
    }
    componentWillReceiveProps(nextProps){
        this.setState(this.getPropsFromStores(nextProps, this.context));
    }
    componentDidMount(){
        const stores = this.getStores(this.props, this.context);
        this.storeListeners = stores.map((store) => {
            return store.listen(() => this.onChange());
        });
    }
    componentWillUnmount(){
        this.storeListeners.forEach(unlisten => unlisten());
    }
    onChange(){
        this.setState(this.getPropsFromStores(this.props, this.context));
    }
    shouldComponentUpdate(){
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }
}

export default AltStoreComponent;