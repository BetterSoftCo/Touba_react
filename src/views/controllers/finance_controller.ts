import { Component } from 'react';

interface IProps {

}

interface IState {
  active: number;
  activeLink: number;
  filter: number;
}

export class FinanceController extends Component<IProps, IState> {

  state = {
    active: 1,
    activeLink: 0,
    filter: 1,

  };
  TABLE = [
    {
      id: 1,
      code: 65423132445,
      date: "18 Aug 2021 - 14:15",
      amount: 1850,
      detail: "INVOICE",
    },
    {
      id: 2,
      code: 65423132445,
      date: "18 Aug 2021 - 14:15",
      amount: 36214,
      detail: "INVOICE",
    },
    {
      id: 3,
      code: 65423132445,
      date: "18 Aug 2021 - 14:15",
      amount: 36214,
      detail: "INVOICE",
    },
    {
      id: 4,
      code: 65423132445,
      date: "18 Aug 2021 - 14:15",
      amount: 518,
      detail: "INVOICE",
    },
    {
      id: 5,
      code: 65423132445,
      date: "18 Aug 2021 - 14:15",
      amount: 518,
      detail: "INVOICE",
    },
  ];
  TEST_NAV_ITEM = [
    {
      title: "Overview",
      active: true,
      location: "/",
      id: 0,
    },
    {
      title: "Sold Items",
      active: false,
      location: "/test",
      id: 1,
    },
    {
      title: "Purchased Items",
      active: false,
      location: "/",
      id: 2,
    },
    {
      title: "Redeemed Invoices",
      active: false,
      location: "/",
      id: 3,
    },
    {
      title: "Income/Pay Calendar",
      active: false,
      location: "/",
      id: 4,
    },
  ];
  //list
  handleActiveTab = (number: number) => {
    this.setState({ active: number });
  }
  handleGetActiveLink = (id: number) => {
    this.setState({ activeLink: id });
  };
  handleShow = (e: number) => {
    this.setState({ filter: e });
  };
  getCellContent(date: { getMonth: () => number; getDate: () => number; }) {
    return '';
  }
}
export default FinanceController;


