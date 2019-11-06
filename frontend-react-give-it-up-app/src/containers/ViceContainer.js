import React from "react"
import { getVices, addViceToCart } from '../redux/actions/viceActions'
import { connect } from 'react-redux'
import Vice from '../components/Vice'
import CreateVice from "../components/CreateVice"
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'


class ViceContainer extends React.Component {

  state = {
    vicesCopy: [],
    categories: [],
    filter:''
  }

  componentDidMount() {
    fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(categories => {
        this.setState({categories})
      })
    this.props.getVices()
  }

  handleClick = (vice) => {
    if (!localStorage.token) {
      this.props.history.push('/signup')
    }
    this.props.addViceToCart(vice)
  }

  renderVices = () => {
    return this.props.vices.map( vice => <Vice key={vice.id} handleClick={this.handleClick} {...vice} /> )
  }

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  // filterVices = (vices) => {
  //   if(this.state.filter !== "All Vices") {
  //     // return vices.filter(vice => vice.category.name === this.state.filter )
  //   } else {
  //     return vices
  //   }
  // }

  render() {

    return (
    <div>
      <Container className="pt-5 pb-5">
        <Row>
          <Form className="pr-3">
            <Form.Control as="select" value={this.state.filter} onChange={this.hand}>
              <option>All Vices</option>
              {this.state.categories.map(cat => <option key={cat.id} value={cat.name} >{cat.name}</option>)}
            </Form.Control>
          </Form>
          <CreateVice categories={this.state.categories}/>
        </Row>
      </Container>

      <Container>
        <Row>
        {this.renderVices()}
        </Row>
      </Container>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    vices: state.vices,
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  getVices: getVices,
  addViceToCart: addViceToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ViceContainer)
