import { Component } from 'react';
import { CHART } from '../components/chart';

interface IProps {

}

interface IState {
    more: boolean;
    selectText: string;
    select: string;
    valueText: string;
    search: string;
}

export class HomeController extends Component<IProps, IState> {

    

    state = {
        more: false,
        selectText: "",
        select: "",
        valueText: "",
        search: "",
    };

    TEST: CHART[] = [
        { name: "JAN", size: 20 },
        { name: "FEB", size: 30 },
        { name: "MAR", size: 40 },
        { name: "APR", size: 50 },
        { name: "MAY", size: 60 },
        { name: "JUN", size: 70 },
        { name: "JUL", size: 80 },
        { name: "AUG", size: 90 },
        { name: "SEP", size: 100 },
        { name: "OCT", size: 20 },
        { name: "NOV", size: 20 },
        { name: "DEC", size: 20 },
    ];

    //list
    handleBlurText = () => {
        this.setState({ more: true });
    }
    handleGetSelectText = (value: string) => {
        console.log(value);
        this.setState({ selectText: value });
    }
    handleGetSelect = (value: string) => {
        console.log(value);
        this.setState({ select: value });
    }
    handleGetValueText = (value: string) => {
        console.log(value);
        this.setState({ valueText: value });
    }
    handleGetResultSearch = (value: string) => {
        console.log(value);
        this.setState({ search: value });
    }
}
export default HomeController;


