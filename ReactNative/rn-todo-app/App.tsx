import React, { useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'

import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { TodoScreen } from './src/screens/TodoScreen'

import { ITodo } from './src/interfaces'

const App: React.FC = () => {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState<ITodo[]>([
    // { id: '1', title: 'Выучить React Native' },
  ])

  const _addTodo = (title: string) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ])
  }

  const _removeTodo = id => {
    const selectedTodo = todos.find(todo => todo.id === id)
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${selectedTodo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          },
        },
      ],
      { cancelable: false }
    )
  }

  const _updateTodo = (id, title) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.title = title
        }

        return todo
      })
    )
  }

  let content = (
    <MainScreen
      todos={todos}
      addTodo={_addTodo}
      removeTodo={_removeTodo}
      openTodo={setTodoId}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)

    content = (
      <TodoScreen
        onRemove={_removeTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={_updateTodo}
      />
    )
  }

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>{content}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
})

export default App
