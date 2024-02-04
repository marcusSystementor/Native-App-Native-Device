import {Alert, Button, View} from "react-native";
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from "expo-image-picker";

function ImagePicker() {

const [cameraPermissionInformaton, requestPermission] = useCameraPermissions();

async function verifyPermissions() {
    if (cameraPermissionInformaton.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();

        return permissionResponse.granted;
    }
    if (cameraPermissionInformaton.status === PermissionStatus.DENIED) {
        Alert.alert("Denied, grant camera permission")
    }
}

  async function takeImageHandler() {
     const image =  await launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality: 0.5,

     });
     console.log(image);

    }

    return <View>
        <View>
            <Button title="Take Image" onPress={takeImageHandler} />
        </View>
    </View>
}

export default ImagePicker;