import React, {Component} from 'react'
import {Segment, Input} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {buscaVideo} from './../store/actions/busca-video'

class SearchBar extends Component {
    pesquisaTermo = e => {
        if(e.keyCode === 13) {
            const termo = e.target.value
            console.log(termo)
            this.props.buscaVideo(termo)
        } 
    }

    render () {
        return(
            <div className="search-bar">
                <Segment stacked>
                    <Input
                        onKeyUp = {(e) => this.pesquisaTermo(e)}
                        icon='search' 
                        size = 'large'
                        placeholder = 'Digite para pesquisar...'/>
                </Segment>
            </div>
        )   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buscaVideo: (termo) => dispatch(buscaVideo(termo))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)