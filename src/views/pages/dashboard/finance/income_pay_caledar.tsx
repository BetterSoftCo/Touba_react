import FinanceController from "../../../controllers/finance_controller";
// import { ScheduleComponent, ViewsDirective, ViewDirective, Month, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
// // import './cell-template.css';

export default class IncomePayCalendar extends FinanceController {
    // private getCellContent(date: Date) {
    //     if (date.getMonth() === 10 && date.getDate() === 23) {
    //         return '<img src= "src/schedule/images/thanksgiving-day.svg" /><div className="caption">Thanksgiving day</div>';
    //     } else if (date.getMonth() === 11 && date.getDate() === 9) {
    //         return '<img src="src/schedule/images/get-together.svg" /><div className="caption">Party time</div>';
    //     } else if (date.getMonth() === 11 && date.getDate() === 13) {
    //         return '<img src="src/schedule/images/get-together.svg" /><div className="caption">Party time</div>';
    //     } else if (date.getMonth() === 11 && date.getDate() === 22) {
    //         return '<img src="src/schedule/images/birthday.svg" /><div className="caption">Happy birthday</div>';
    //     } else if (date.getMonth() === 11 && date.getDate() === 24) {
    //         return '<img src="src/schedule/images/christmas-eve.svg" /><div className="caption">Christmas Eve</div>';
    //     } else if (date.getMonth() === 11 && date.getDate() === 25) {
    //         return '<img src="src/schedule/images/christmas.svg" /><div className="caption">Christmas Day</div>';
    //     } else if (date.getMonth() === 0 && date.getDate() === 1) {
    //         return '<img src="src/schedule/images/newyear.svg" /><div className="caption">New Year\'s Day</div>';
    //     } else if (date.getMonth() === 0 && date.getDate() === 14) {
    //         return '<img src="src/schedule/images/get-together.svg" /><div className="caption">Get together</div>';
    //     } else {
    //         return '';
    //     }
    // }
    // private cellTemplate(props: { type: string; date: Date; }) {
    //     if (props.type === "monthCells") {
    //         return (<div className="templatewrap" dangerouslySetInnerHTML={{ __html: this.getCellContent(props.date) }}></div>);
    //     }
    //     return ;
    // }
    // render() {
    //     return (
    //         <div className='schedule-control-section'>
    //             <div className='col-lg-12 control-section'>
    //                 <div className='control-wrapper'>
    //                     <ScheduleComponent cssClass='cell-template' width='100%' height='650px' selectedDate={new Date(2021, 11, 15)}
    //                         cellTemplate={this.cellTemplate.bind(this)}>
    //                         <ViewsDirective>
    //                             <ViewDirective option='Month' />
    //                         </ViewsDirective>
    //                         <Inject services={[Month, Resize, DragAndDrop]} />
    //                     </ScheduleComponent>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }
    render() {
        return(
            <></>
        )
    }
}
