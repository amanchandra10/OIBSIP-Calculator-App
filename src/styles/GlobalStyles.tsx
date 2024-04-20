import {StyleSheet} from 'react-native';
import {myColors} from './Colors';

export const Styles = StyleSheet.create({
  // Button css
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 40,
    backgroundColor: myColors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 40,
    backgroundColor: myColors.btnDark,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 40,
    backgroundColor: myColors.btnGray,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  smallTextLight: {
    fontSize: 35,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 35,
    color: myColors.black,
  },
  // Keyboard css
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
  },
  viewBottom: {
    position: 'absolute',
    bottom: 0,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  lasttext: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '900',
  },
  lasttextdark: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '900',
    color: myColors.white,
  },
  lastview: {
    paddingVertical: 20,
  },
});
