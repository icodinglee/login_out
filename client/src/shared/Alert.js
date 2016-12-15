import Alert from 'react-s-alert';
export function AlertError(message){
  Alert.error(message, {
       position: 'top-right',
       effect: 'slide',
       timeout: 1200
   });
}

export function AlertSuccess(message){
  Alert.success(message, {
       position: 'top-right',
       effect: 'slide',
       timeout: 1200
   });
}
