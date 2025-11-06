import React, {useState} from 'react';
import {Text, ScrollView, Alert, TouchableOpacity} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Qn from './Question.js';


const Quiz = () => {
    const [ans1, setAnswer1] = useState('Pick 1');
    const [ans2, setAnswer2] = useState('Pick 1');
    const [ans3, setAnswer3] = useState('Pick 1');
    const [ans4, setAnswer4] = useState('Pick 1');
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const correctans1 = "Loafing";
    const correctans2 = "Survive";
    const correctans3 = "Sleeping";
    const correctans4 = "Kitten";

    const checkAnswers =() =>{
    let tempscore = 0;
    if (ans1 === correctans1) tempscore++;
    if (ans2 === correctans2) tempscore++;
    if (ans3 === correctans3) tempscore++;
    if (ans4 === correctans4) tempscore++;

    setScore(tempscore);
    setShowAnswer(true);

        const msg =
            tempscore === 4
                ? "Congrats! You got all correct, " + tempscore + " / 4!"
                : tempscore >= 2
                    ? "Good job! You got " + tempscore + " / 4!"
                    : "You got "+ tempscore + " / 4. You failed. Please try again!";


        Alert.alert('Quiz Result', msg);

}
    return (
        <ScrollView style={{marginTop: 40}}>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom:10}}><Entypo name="bell" size={24} color="black" /> Cat Q U I Z <Entypo name="bell" size={24} color="black" /></Text>
            <Qn
                question="What position is this cat in?"
                selectedValue={ans1}
                onChange={setAnswer1}
                options={["Loafing", "Lying down", "Sitting", "Standing"]}
                poster="https://cats.com/wp-content/uploads/2022/05/cat-loaf-feature-compressed.jpg"
                icon_colour="grey"
                icon_name="blackboard"
            />
            <Qn
                question="Why do cats eat?"
                selectedValue={ans2}
                onChange={setAnswer2}
                options={["Survive", "Thirsty", "Active", "Tired"]}
                poster="https://dogsfirst.ie/wp-content/uploads/2016/05/wallpaper-cat-eat-fish-1024x576.jpg"
                icon_colour="blue"
                icon_name="browser"
            />
            <Qn
                question="What is the cat doing?"
                selectedValue={ans3}
                onChange={setAnswer3}
                options={["Stretching", "Yawning", "Sleeping", "Eating"]}
                poster="https://image.petmd.com/files/styles/978x550/public/2024-04/why-does-my-cat-sleep-on-my-head.jpg"
                icon_colour="purple"
                icon_name="baidu"
            />
            <Qn
                question="What is the age of this cat?"
                selectedValue={ans4}
                onChange={setAnswer4}
                options={["Kitten", "Adult", "Elderly", "Dog"]}
                poster="https://www.operationkindness.org/wp-content/uploads/blog-kitten-nursery-operation-kindness.jpg"
                icon_colour="red"
                icon_name="check"
            />
            <TouchableOpacity
                onPress={checkAnswers}
                style={{
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 10,
                    alignItems: "center",
                    marginTop: 20,
                }}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Submit Answers</Text>
            </TouchableOpacity>
            <Text style={{fontSize:20, fontWeight: "bold", textAlign: "center"}}>
                {showAnswer} Your current score: {score} / 4
            </Text>

        </ScrollView>
    );
};

export default Quiz;

