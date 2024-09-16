import{ View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';

function Header() {
    return ( 
        <View>
            <View style={styles.container}  >


                <View > 
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri:'https://salt.tikicdn.com/cache/750x750/ts/product/b9/82/8a/467b81a449a9b28f252bb97865fd1bfc.jpg.webp',}}
                    />
                </View>

                <View style={styles.textWrapper} >
                    <Text style={styles.text} >Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={styles.text} >Cung cấp bởi Tiki Trading</Text>
                    <Text style={styles.textValue} >141.800</Text>
                    <Text style={styles.text} >141.800</Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >

                        <Text style={styles.text} >Số lượng: 1</Text>
                        <Text style={{fontSize: 14, color: 'blue', fontWeight:'bold' }} >Mua sau</Text>

                    </View>

                </View>

                
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                margin: 14,
                padding: 10,

            }} >
                <Text style={{fontSize: 14, fontWeight:'bold', marginRight:  30 }} >Mã giảm giá</Text>     
                <Text style={{fontSize: 14, fontWeight:'bold',color: 'blue' }} >Xem tại đây</Text>  
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',



            }} >
                <TextInput style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, padding: 10}} placeholder="Nhập mã giảm giá" />
                <Button style={{
                    padding: 10,
                    borderRadius: 10,
                    width: 100,
                    height: 40,
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: 'blue',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }} title="Áp dụng" color="blue" />

                
            
            </View>
                    
            <View style={{
                backgroundColor: '#ccc',
                width: '100%',
                height: 20,
                marginTop: 20,
                marginBottom: 20,


            }} ></View>

        </View>


        
     );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 40,
    
    },
    tinyLogo: {
        flex: 1,
        width: 180,
        height: 180,
        resizeMode: 'contain',
      },
    textWrapper: {
        flex: 2,
        height: 50,
        marginRight: 10,
       
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    textValue: {
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 15,
    },

  });

export default Header;