import { ChangeEvent, Component } from "react";
import { IconCallSorme, IconLocationSorme, IconPaperBlack, IconStarSorme, IconWalletSorme } from "../../assets";
import { nanoid } from 'nanoid';

type DETAILS = {
    establishedYear: string;
    businessType: string;
    businessCategory: string;
    mainProducts: string;
    mainMarket: string;
    numberOfEmployee: string | number;
    registeredCapital: string;
    planeArea: string;
}

type CERTIFICATE = {
    registerDate: string;
    expireDate: string;
    certificateName: string;
    certificateCode: string;
    imageCertificate: string;
    id: string;
}

interface IProps { }
interface IState {
    activeLink: number;
    image: File | string;
    activeTab: number;
    modalDelete: boolean;
    modalDescription: boolean;
    getDiscription: string;
    description: string;
    modalDetails: boolean;
    establishedYear: string;
    businessType: string;
    businessCategory: string;
    mainProducts: string;
    mainMarket: string;
    numberOfEmployee: string | number;
    registeredCapital: string;
    planeArea: string;
    details: DETAILS;
    modalAddCertificate: boolean,
    modalEditCertificate: boolean,
    registerDate: string;
    expireDate: string;
    certificateName: string;
    certificateCode: string;
    imageCertificate: string;
    certificate: CERTIFICATE[];
    idEditCertification?: string;
    modalFAQ: boolean;
    question: string;
    faq: {
        image: string,
        text: string,
    };
    modalContact: boolean;
    address: string;
    phoneNumber: string,
    contactSuplier: string;
    modalLocation: boolean;
}

export class CompanyProfileEditController extends Component<IProps, IState> {

    state = {
        activeLink: 0,
        image: "",
        activeTab: 1,
        modalDelete: false,
        modalDescription: false,
        getDiscription: "",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi",
        modalDetails: false,
        establishedYear: "",
        businessType: "",
        businessCategory: "",
        mainProducts: "",
        mainMarket: "",
        numberOfEmployee: "",
        registeredCapital: "",
        planeArea: "",
        details: {
            establishedYear: "2015",
            businessType: "Manufacturer/Factory",
            businessCategory: "Cosmetic and Hygiene",
            mainProducts: "Milk Powder , Food Powders , Food raw materials",
            mainMarket: "Wheel Loader , Forklift , Excavator , Tractor , Bulldozer , Roadroller , Trailer , Telescopic ...",
            numberOfEmployee: "3000",
            registeredCapital: "2000000 RMB",
            planeArea: ">2000 square meters",
        },
        modalAddCertificate: false,
        modalEditCertificate: false,
        registerDate: "",
        expireDate: "",
        certificateName: "",
        certificateCode: "",
        imageCertificate: "",
        certificate: [{
            registerDate: "",
            expireDate: "",
            certificateName: "",
            certificateCode: "",
            imageCertificate: "",
            id: ""
        }],
        idEditCertification: "",
        modalFAQ: false,
        question: "",
        faq: {
            image: "",
            text: "",
        },
        modalContact: false,
        address: "",
        phoneCode: "",
        phoneNumber: "",
        contactSuplier: "",
        modalLocation: false,
    };

    items = [
        { name: "item1", id: 1 },
        { name: "item2", id: 2 },
        { name: "item3", id: 3 },
        { name: "item4", id: 4 },
    ]

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

    getActiveLink = (id: number) => {
        this.setState({ activeLink: id })
    }

    getImage = (event: ChangeEvent<HTMLInputElement>) => {
        const files = (event.currentTarget as HTMLInputElement).files;
        if (files && files.length > 0) {
            this.setState({ image: URL.createObjectURL(files[0]) });
        }
        console.log(this.state.image);
    };

    deleteImage = () => {
        this.setState({ modalDelete: false })
        this.setState({ image: "" })
    };

    getActiveTab = (id: number) => {
        this.setState({ activeTab: id })
    };

    showModalDelete = () => {
        this.setState({ modalDelete: true })
    };

    closeModalDelete = () => {
        this.setState({ modalDelete: false })
    };

    showModalDescription = () => {
        this.setState({ modalDescription: true })
    };

    closeModalDescription = () => {
        this.setState({ modalDescription: false })
    };

    submitChangeDescription = () => {
        this.setState({ description: this.state.getDiscription });
        this.setState({ modalDescription: false });
    };

    getDescription = (text: string) => {
        this.setState({ getDiscription: text })
    }

    showModalDetails = () => {
        this.setState({ modalDetails: true })
    };

    closeModalDetails = () => {
        this.setState({ modalDetails: false })
    };

    getBusinessType = (value: string) => {
        this.setState({ businessType: value })
    };

    getBusinessCategory = (value: string) => {
        this.setState({ businessCategory: value })
    };

    getPlantArea = (value: string) => {
        this.setState({ planeArea: value })
    };

    saveDeatils = () => {
        const newDeatils: DETAILS = {
            establishedYear: this.state.establishedYear,
            businessType: this.state.businessType,
            businessCategory: this.state.businessCategory,
            mainProducts: this.state.mainProducts,
            mainMarket: this.state.mainMarket,
            numberOfEmployee: this.state.numberOfEmployee,
            registeredCapital: this.state.registeredCapital,
            planeArea: this.state.planeArea,
        }
        this.setState({ details: newDeatils });
        this.setState({ modalDetails: false })
    };

    showModalAddCretificate = () => {
        this.setState({ modalAddCertificate: true })
    };

    closeModalAddCretificate = () => {
        this.setState({ modalAddCertificate: false })
    };

    showModalEditCretificate = (id?: string) => {
        this.setState({ modalEditCertificate: true })
        this.setState({ idEditCertification: id })
    };

    closeModalEditCretificate = () => {
        this.setState({ modalEditCertificate: false })
    };

    getDateRegister = (value: string) => {
        this.setState({ registerDate: value })
    };

    getDateExpire = (value: string) => {
        this.setState({ expireDate: value })
    };

    getCodeCertificate = (value: string) => {
        this.setState({ certificateCode: value })
    };

    getImageCertificate = (image: string) => {
        this.setState({ imageCertificate: image })
    };

    addCertificatios = () => {
        const newCertification: CERTIFICATE = {
            registerDate: this.state.registerDate,
            expireDate: this.state.expireDate,
            certificateName: this.state.certificateName,
            certificateCode: this.state.certificateCode,
            imageCertificate: this.state.imageCertificate,
            id: nanoid(),
        }
        this.setState({ certificate: [...this.state.certificate, newCertification] })
        this.setState({ modalAddCertificate: false })
    };

    editCertificatios = () => {
        const newCertification: CERTIFICATE = {
            registerDate: this.state.registerDate,
            expireDate: this.state.expireDate,
            certificateName: this.state.certificateName,
            certificateCode: this.state.certificateCode,
            imageCertificate: this.state.imageCertificate,
            id: this.state.idEditCertification,
        }

        if (this.state.certificate.find(item => item.id === this.state.idEditCertification)) {
            this.setState({
                certificate: [{
                    registerDate: this.state.registerDate,
                    expireDate: this.state.expireDate,
                    certificateName: this.state.certificateName,
                    certificateCode: this.state.certificateCode,
                    imageCertificate: this.state.imageCertificate,
                    id: this.state.idEditCertification,
                }]
            })
        }
        this.setState({ modalEditCertificate: false })
    };

    showModalFAQ = () => {
        this.setState({ modalFAQ: true })
    };

    closeModalFAQ = () => {
        this.setState({ modalFAQ: false })
    };

    getValuesFAQ = (image: string, text: string) => {
        const newFAQ = { image, text };
        this.setState({ faq: newFAQ })
    };

    showModalContact = () => {
        this.setState({modalContact: true})
    };

    closeModalContact = () => {
        this.setState({modalContact: false})
    };

    showModalLocation = () => {
        this.setState({modalLocation: true})
    };

    closeModalLocation = () => {
        this.setState({modalLocation: false})
    };

    getPhoneNumber = (value: string) => {
        this.setState({phoneNumber: value})
    };
}
export default CompanyProfileEditController;
