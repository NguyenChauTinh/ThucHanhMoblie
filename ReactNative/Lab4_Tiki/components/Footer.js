import { View , Text, Button} from "react-native";

function Footer() {
    return ( 
        <View style={{
            backgroundColor: '#fff',
            width: '100%',
            height: 20,
            marginBottom: 20,
        
        
        }} >

            <View  style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
                

            }} >
                <Text 
                style={{
                    fontSize: 24,
                    fontWeight:'bold',
                   
                }}
                
                > Thành tiền </Text>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight:'bold',
                        color: 'red',
                    }}
                > 0đ </Text>
                


            </View>

            <Button
            style={{
                color: 'white',
                fontSize: 24,
                fontWeight:'bold',
                marginTop: 40,
                marginBottom: 20,
                padding: 10,
            }}
            
            title="Tiến hành đặt hàng" color="red" 
            
            ></Button>


        </View>


     );
}

export default Footer;