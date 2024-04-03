import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionCard from "../QuestionCard";
import ReactPaginate from 'react-paginate';
import './index.css'
import {useStore} from "../../store";
const requireSvg = (svgName) => process.env.PUBLIC_URL + `/logo/${svgName}.svg`;

const svgFiles = [
    'fresno-grizzlies',
    'goldman-sachs-1',
    'hallmark-4',
    'memphis-grizzlies-2',
    'sachs-5',
    'thermo-fisher-scientific-1',
];

const QuestionList = () => {
    const [newQuestions, setNewQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const questionsPerPage = 5;
    const selectedCompanies = useStore((state) => state.selectedCompanies);
    const [constquestion, setConstQuestion] = useState([]);
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('/data.json');
                const questions = response.data;


                const shuffleArray = (array) => {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                };

                const shuffledLogos = shuffleArray([...svgFiles]);

                const questionsWithLogos = questions.map((question, index) => ({
                    ...question,
                    logo: requireSvg(shuffledLogos[index % shuffledLogos.length].replace('.svg', '')),
                }));

                setConstQuestion(questionsWithLogos);
                setNewQuestions(questionsWithLogos)
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);
    useEffect(()=>{
        const filteredQuestions = selectedCompanies.length > 0
            ? constquestion.filter((question) =>
                selectedCompanies.includes(question.companyName))
            : constquestion;
        setNewQuestions(filteredQuestions)
    },[selectedCompanies])

    const indexOfFirstQuestion = currentPage * questionsPerPage;
    const indexOfLastQuestion = indexOfFirstQuestion + questionsPerPage;

    const currentQuestions = newQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);



    const paginate = ({ selected }) => {
        setCurrentPage(selected);
        window.scrollTo(0, 0);
    };

    return (
        <div className="lg:col-span-3">
            <h2 className="text-lg font-bold mb-4">{newQuestions.length} Questions</h2>
            {currentQuestions.map((item, index) => (
                <QuestionCard
                    key={index}
                    companyName={item.companyName}
                    roleName={item.roleName}
                    question={item.question}
                    date={item.date}
                    questionType={item.questionType}
                    logo={item.logo}
                />
            ))}
            <ReactPaginate
                previousLabel={null}
                nextLabel={<span>&gt;</span>}
                pageCount={Math.ceil(newQuestions.length / questionsPerPage)}
                onPageChange={paginate}
                containerClassName="pagination"
                pageClassName="pageItem"
                pageLinkClassName="pageLink"
                activeClassName="active"
                nextClassName="nextButton"
                nextLinkClassName="pageLink"
            />

        </div>
    );
};

export default QuestionList;