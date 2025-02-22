import React from 'react';
import { View, Text, Pressable, StyleSheet, Switch } from 'react-native';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <View style={styles.container}>
            <Switch
                value={task.completed}
                onValueChange={() => toggleCompleted(task.id)}
            />
            <Text style={[styles.text, task.completed && styles.completedText]}>
                {task.text}
            </Text>
            <Pressable style={styles.deleteButton} onPress={() => deleteTask(task.id)}>
                <Text style={styles.deleteText}>X</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f8f9fa',
        borderRadius: 5,
    },
    text: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
