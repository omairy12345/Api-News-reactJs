import React,{Component} from "react"
import './App.css';
import { categorias, paises } from './services/dataFilter';
import NewsList from './Components/ListNews';
import Buscador from './Components/filterNews';
import NewsRest from './services/datanews';
import Select from "react-select";


class App extends Component {

  state = {
    isLoading: false,
    articles: [],
    query: '',
    pais: 'us',
    categoria: '',
  
    
  }

  componentDidMount() {
    this.search(null)
  }


  search = async (value) => {

    this.setState({
      query: value,
      isLoading: true
    });

    var res = await NewsRest({
      q: value,
      country: this.state.pais,
      category: this.state.categoria,

    })

    this.setState({
      articles: res.data.articles,
      isLoading: false
    })
  }

  setCountry = (option) => {
    this.setState({
      pais: option.value
    });
  }
  setCategory = (option) => {
    this.setState({
      categoria: option.value
    });
  }


  render() {

    return (
      <div className="App container">
        <h1 className="nombre" >GLOBAL NEWS</h1>
        

        <Select options={paises} placeholder='Select country' onChange={this.setCountry} />
        <div style={{ height: "15px" }} />
        <Select options={categorias} placeholder='Select category' onChange={this.setCategory} />
        <div style={{ height: "20px" }} />
        <Buscador onSearch={this.search} />
        <NewsList isLoading={this.state.isLoading} articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
