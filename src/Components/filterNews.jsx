import React, { Component } from 'react';

class Buscador extends Component {

    constructor(props) {
        super(props)
    }

    hadleNewsSubmit = (event) => {

        event.preventDefault()

        this.props.onSearch(event.target.elements['search'].value)
    }

    render() {
        return (
            <form className='d-flex' onSubmit={this.hadleNewsSubmit}>
                <div className='flex-grow-1'>
                    <input type="text" className='form-control' placeholder='Search News' name='search'></input>
                </div>

                <div style={{ width: '200px' }} className='d-grid grad-4 ms-6'>
                    <button className='btn btn-gradient p-1,8 mb-2 bg-primary text-white d-block' type='submit'>
                        Buscar news
                    </button>
                </div>
            </form>

        );
    }
}

export default Buscador;