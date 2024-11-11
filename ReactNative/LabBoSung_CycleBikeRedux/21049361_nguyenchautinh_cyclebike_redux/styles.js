import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  imageContainer: {
    padding: 20,
    backgroundColor: '#FFE4E4',
    margin: 20,
    borderRadius: 10,
  },
  bikeImage: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FF4444',
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 40,
    marginTop: 'auto',
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryButtonActive: {
    backgroundColor: '#FF4444',
    borderColor: '#FF4444',
  },
  categoryText: {
    color: '#666',
  },
  categoryTextActive: {
    color: '#fff',
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  heartIcon: {
    fontSize: 24,
    color: '#ddd',
  },
  heartIconActive: {
    color: '#FF4444',
  },
  detailImage: {
    width: '100%',
    height: 300,
  },
  detailContent: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailPrice: {
    fontSize: 20,
    marginVertical: 10,
  },
  discountText: {
    color: '#FF4444',
  },
  description: {
    color: '#666',
    lineHeight: 20,
    marginVertical: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#FF4444',
    padding: 15,
    borderRadius: 25,
    flex: 1,
    marginLeft: 20,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 20,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF4444',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});