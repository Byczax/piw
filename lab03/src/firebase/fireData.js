import { firestore } from "./init";
import {
    collection, 
    addDoc,  
    query,
    where, 
    getDocs, 
    updateDoc,
    deleteDoc,
    doc,
    Timestamp,
} from 'firebase/firestore';

export const addNewStudent = async (content) => {
    try {
        await addDoc(collection(firestore, 'students'), {
            // uid: user.uid,
            content: content,
            created: Timestamp.now()
        });
    } catch (err) {
        console.log({err});
    }
}

export const getAllStudents = async (user) => {
    // const q = query(collection(firestore, "students"),
        // where("uid", "==", user.uid));
    const q = collection(firestore, "students");
    const students = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            students.push(doc.data().content);
        });
    } catch (err) {
        console.log({err});
    }
    // console.log({students});
    return students;
}

export const getAllGroups = async (user) => {
    // const q = query(collection(firestore, "students"),
        // where("uid", "==", user.uid));
    const q = collection(firestore, "groups");
    const groups = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            groups.push(doc.data().content);
        });
    } catch (err) {
        console.log({err});
    }
    // console.log({groups: groups});
    return groups;
}

export const getAllData = async (user) => {
    const students = await getAllStudents(user);
    const groups = await getAllGroups(user);
    return {students, groups};
}


export const addNewGroup = async (content) => {
    try {
        await addDoc(collection(firestore, 'groups'), {
            // uid: user.uid,
            content: content,
            created: Timestamp.now()
        });
    } catch (err) {
        console.log({err});
    }
}