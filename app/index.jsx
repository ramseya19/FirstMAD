import { StyleSheet, Text, View, } from 'react-native'
import { Link } from 'expo-router'

// ThemedView components
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>

     {/* <ThemedLogo source={Logo} style={styles.img}/> */}
      <ThemedText style={styles.title} >
        NUMBER 1
      </ThemedText>

      <Spacer height = {10} />
      <ThemedText> Reading list App</ThemedText>
      <Spacer />

      <View>
        <Text style={styles.card}>Hello, This is a card.</Text>
      </View>
      <Link href="/login" style={styles.link}>
        <ThemedText>Login page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
      <ThemedText>Register page</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Pge</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    },
    card:{
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)'
    },
    link:{
        marginVertical: 10,
        borderBottomWidth: 1
    }

})