import { View, Text } from "react-native";

function Content() {
    return ( 

        <View >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }}
            >
                <Text
                style={{
                    fontSize: 14,
                    fontWeight:'bold',
                    marginLeft: 24,
                    
                }}

                >Bạn có phiếu quà tặng Tiki/Got it/Urbox</Text>

                <Text
                    
                    style={{
                        fontSize: 14,
                        color: 'blue',
                        fontWeight:'bold',
                        marginLeft: 24,
                    }}
                
                >Nhập tại đây</Text>


            </View>
            <View style={{
                backgroundColor: '#ccc',
                width: '100%',
                height: 20,
                marginTop: 20,
                marginBottom: 20,


            }} ></View>

            <View  style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                

            }} >
                <Text 
                style={{
                    fontSize: 24,
                    fontWeight:'bold',
                   
                }}
                
                > Tạm tính </Text>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight:'bold',
                        color: 'red',
                    }}
                > 0đ </Text>
                


            </View>

            <View style={{
                backgroundColor: '#ccc',
                width: '100%',
                height: 100,
                marginTop: 20,
                marginBottom: 20,


            }} ></View>

        </View>

     );
}

export default Content;