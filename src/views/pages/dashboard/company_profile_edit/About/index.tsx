import { CardUploadImage } from "../../../../components/card_upload_image";
import { SelectComponent } from "../../../../components/components";
import DeleteImage from "../../../../components/delete_image";
import { InputDate } from "../../../../components/input_date";
import { InputTextLabel } from "../../../../components/input_text_label";
import { ModalCompany } from "../../../../components/modal_company";
import MyCompanyNav from "../../../../components/mycompany_nav";
import { TextAreaLabel } from "../../../../components/textarea_lable";
import { TextAreaLabelImage } from "../../../../components/textarea_lable_image";
import CompanyProfileEditController from "../../../../controllers/company_profile_edit_controller";
import Certification from "./certification";
import Description from "./description";
import Faq from "./faq";
import Specification from "./specification";

class SectionAbout extends CompanyProfileEditController {

    render() {
        const {
            modalDescription,
            activeTab,
            modalAddCertificate,
            modalEditCertificate,
            certificateName,
            modalFAQ,
            question,
        } = this.state;
        console.log(modalDescription + "enja")
        return (
            <>
                <div className="body-content-header">
                    <MyCompanyNav
                        onActive={this.getActiveTab}
                        showButton={true}
                        activeBorder={false}
                    />
                </div>
                <div className="body-content-items">
                    {activeTab === 1 ?
                        <Description />
                        :
                        activeTab === 2 ?
                            <Specification />
                            :
                            activeTab === 3 ?
                                <Certification />
                                :
                                <Faq />
                    }
                </div>
            </>
        )
    }
}

export default SectionAbout;