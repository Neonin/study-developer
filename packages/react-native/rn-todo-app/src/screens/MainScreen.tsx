import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

import { ITodo } from '../interfaces'

interface IProps {
  addTodo(id: string): void
  todos: ITodo[]
  removeTodo(id: string): void
  openTodo(id: string): void
}

export const MainScreen: React.FC<IProps> = ({ addTodo, todos, removeTodo, openTodo }) => {
  let content = (<FlatList
    keyExtractor={item => item.id.toString()}
    data={todos}
    renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />}
  />)

  if (todos.length === 0) {
    content = <View style={styles.imgWrap}>
      <Image style={styles.img} source={require('../../assets/no-results.png')}/>
      {/* <Image style={styles.img} source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
      }}/> */}
    </View>
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {
        content
      }
    </View>
  )
}

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: "contain"
  }
})
