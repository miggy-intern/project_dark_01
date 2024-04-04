import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  normalText: {
    fontSize: 20,
    color: 'red',
  },

  container: {
    flex: 1,
    backgroundColor: '#013126',
    justifyContent: 'center',
    alignItems: 'center'

  },

  container2: {
    flex: 1,
  },


  modalView: {
    backgroundColor: '#131928',
    position: 'absolute',
    top: '25%',
    justifyContent: 'center', 
    paddingBottom: 20,
    left: '5%',
    borderRadius: 10,
    height: '60%', 
    width: '90%', 
  },
  
  
  
  scrollView: {
    padding: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red'
  },

  rowEven: {
    backgroundColor: '#2e344a',
  },
  
  rowOdd: {
    backgroundColor: '#282d40',
  },
  column: {
    flex: 1,
    paddingVertical: 10,
  },
  headerColumn: {
    borderBottomColor: '#101523',
  },
  dataColumn: {
    borderBottomColor: '#CBC9D0',
  },
  columnHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  TimeAlign: {
    textAlign: 'left',
    fontSize: 12,
    color: '#81869b'
  },
  LevelAlign: {
    textAlign: 'left',
    fontSize: 12,
    color: '#81869b',
    paddingHorizontal: 10,
  },
  BlindAlign: {
    textAlign: 'left',
    fontSize: 12,
    color: '#81869b',
    flex: 1, 
    width: 80, 
    paddingHorizontal: 10,
  },
  
  backgroundWhite: {
    backgroundColor: '#333c4a',

  },
  headerRow:{
    backgroundColor: '#101523'
  },

  blindsHeader: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    paddingVertical: 20
  },

  closeContainer: {
    position: 'absolute',
    top: 7, 
    right: 5,
    zIndex: 1,
  },
  closeButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  blackPadding: {
    paddingHorizontal: 20,
    paddingVertical: 4,
  }
});

export default Styles;
