import FinanceController from "../../../controllers/finance_controller";
import { ScheduleComponent, ViewsDirective, ViewDirective, Month, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
// import './cell-template.css';

export default class IncomePayCalendar extends FinanceController {
   
    cellTemplate(props: { type: string; date: any; }) {
        if (props.type === "monthCells") {
            return (<div className="templatewrap" dangerouslySetInnerHTML={{ __html: this.getCellContent(props.date) }}></div>);
        }
        return;
    }
    render() {
        return (
            <div className='schedule-control-section'>
                <div className='col-lg-12 control-section'>
                    <div className='control-wrapper'>
                        <ScheduleComponent cssClass='cell-template' width='100%' height='650px' selectedDate={new Date(2021, 11, 15)} cellTemplate={this.cellTemplate.bind(this)}>
                            <ViewsDirective>
                                <ViewDirective option='Month' />
                            </ViewsDirective>
                            <Inject services={[Month, Resize, DragAndDrop]} />
                        </ScheduleComponent>
                    </div>
                </div>
            </div>
        );
    }
}
