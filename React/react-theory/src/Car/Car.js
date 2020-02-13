import React from 'react';
// import Radium from 'radium';
import classes from './Car.css'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

class Car extends React.Component {
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('Car: componentWillReceiveProps', nextProps)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Car: shouldComponentUpdate', nextProps, nextState)
  //   return nextProps.name.trim() !== this.props.name.trim()
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log('Car: componentDidUpdate', nextProps, nextState)
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('Car: getDerivedStateFromProps', nextProps, prevState)

  //   return prevState
  // }

  // componentDidUpdate() {
  //   console.log('Car: componentDidUpdates')
  // }

  // getSnapshotBeforeUpdate () {
  //   console.log('getSnapshotBeforeUpdate')
  // }

  // componentWillUnmount() {
  //   console.log('Car: componentWillUnmount')
  // }
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount () {
    if (this.props.index === 0) {
      this.inputRef.current.focus()
    }
  }

  render () {
    console.log('Car: render')

    // if (Math.random() > 0.7) {
    //   throw new Error('Car: random failed')
    // }

    const inputClasses = [classes.input]

    if (this.props.name !== '') {
      inputClasses.push(classes.green)
    } else {
      inputClasses.push(classes.red)
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold)
    }

    return (
      <React.Fragment>
        <p>Car name: {this.props.name}</p>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          ref={ this.inputRef }
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withClass(Car, classes.Car)
