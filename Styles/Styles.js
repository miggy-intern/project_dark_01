import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  normalText: {
    fontSize: 20,
    color: 'red',
  },

  container: {
    flex: 1,
    backgroundColor: '#1b2b1c',
    justifyContent: 'center',
    alignItems: 'center'
  },

  container2: {
    flex: 1,
  },

  modalView: {
    backgroundColor: '#212730',
    margin: 30,
    padding: 1,
    borderRadius: 10,
    flex: 1
  },
  scrollView: {
    paddingVertical: 1,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rowEven: {
    backgroundColor: '#333c4a',
  },
  
  rowOdd: {
    backgroundColor: '#212730',
  },
  column: {
    flex: 1,
    paddingVertical: 10,
  },
  headerColumn: {
    borderBottomColor: 'black',
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
    textAlign: 'center',
    fontSize: 16,
    color: '#cccccc'
  },
  LevelAlign: {
    textAlign: 'left',
    fontSize: 16,
    color: '#cccccc',
    paddingHorizontal: 30,
  },
  BlindAlign: {
    textAlign: 'right',
    fontSize: 16,
    color: '#cccccc',
    paddingHorizontal: 30,
  },
  backgroundWhite: {
    backgroundColor: '#333c4a',

  },
  headerRow:{
    backgroundColor: 'black'
  },

  blindsHeader: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingVertical: 20
  },

  closeContainer: {
    position: 'absolute',
    top: 10,
    right: 30,
    zIndex: 1,
  },
  closeButton: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },

  closeButton: {
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
    paddingHorizontal: 30,
    paddingBottom: 30,
  }
});

export default Styles;