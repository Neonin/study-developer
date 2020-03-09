import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { THEME } from '../theme'

interface Props {
  onSubmit(title: string): void;
}

export const AddTodo: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const _pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Название дела не может быть пустым!')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите название дела..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={_pressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
})
