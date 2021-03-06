import { Component } from "react";
import { IconCallSorme, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme } from "../../assets";


interface IProps { }
interface IState {
    activeLink: number;
    activeTab: number;
    certificateName: string;
    certificateCode: string;
    registerDate: string;
    expireDate: string;
    image: string;
    address: string;
    phoneCode: number | string;
    phoneNumber: number | string;
    timeZone: string;
    supplierName: string;
    positionInCountry: string;
    imageUser: string;
    modalLocation: boolean;
    locationName: string;
    startPage:boolean
}

export class CompanyProfileStartController extends Component<IProps, IState> {

    state = {
        activeLink: 0,
        activeTab: 1,
        certificateName: "",
        certificateCode: "",
        registerDate: "",
        expireDate: "",
        image: "",
        address: "",
        phoneCode: "",
        phoneNumber: "",
        timeZone: "",
        supplierName: "",
        positionInCountry: "",
        imageUser: "",
        modalLocation: false,
        locationName: "",
        startPage:true,
    };

    TEST_NAV_ITEM = [
        {
            title: "About Page",
            icon: `${IconPaperBlack}`,
            id: 0
        },
        {
            title: "Contact Us Page",
            icon: `${IconCallSorme}`,
            id: 1
        },
        {
            title: "Payments Setting",
            icon: `${IconWalletSorme}`,
            id: 2
        },
        {
            title: "Locations",
            icon: `${IconLocationSorme}`,
            id: 3
        },
        {
            title: "Visual Settings",
            icon: `${IconStarSorme}`,
            id: 4
        }
    ];


    items = [
        { name: "item1", id: 1 },
        { name: "item2", id: 2 },
        { name: "item3", id: 3 },
        { name: "item4", id: 4 },
    ]

    getActiveLink = (id: number) => {
        this.setState({ activeLink: id })
    };

    getActiveTab = (id: number) => {
        this.setState({ activeTab: id })
    };

    getCertificateCode = (text: string) => {
        this.setState({ certificateCode: text })
    };

    getRegisterDate = (date: string) => {
        this.setState({ registerDate: date })
    };

    getExpireDate = (date: string) => {
        this.setState({ expireDate: date })
    };

    getImage = (image: string) => {
        this.setState({ image: image })
    };

    getTimeZone = (value: string) => {
        this.setState({ timeZone: value })
    };

    getPositionInCountry = (value: string) => {
        this.setState({ positionInCountry: value })
    };

    getImageUser = (image: string) => {
        this.setState({ imageUser: image })
    };

    closeModalLocation = () => {
        this.setState({modalLocation: false})
    };

    showModalLocation = () => {
        this.setState({modalLocation: true})
    };

    closeStartPage = () => {
        this.setState({startPage: false})
    };

    getPhoneNumber = (value: string) => {
        this.setState({phoneNumber: value})
    }

}
export default CompanyProfileStartController;

