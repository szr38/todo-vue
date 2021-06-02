// import router from '@/router';
import { useRouter } from 'vue-router';
import { auth, firebase } from '../firebase'


export const useUser = () => {

    const router = useRouter();
    const singIn = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
            router.push('profile');
        } catch (error) {
            console.log(error);
        }
    }
}