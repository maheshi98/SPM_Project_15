import React, { Component } from 'react';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import { Row } from 'react-bootstrap';
import { RiFileDownloadLine } from 'react-icons/ri';
import './index.css'

export default class GenerateReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                { name: "Keanu Reeves", profession: "Actor", image:"https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg" },
                { name: "Lionel Messi", profession: "Football Player", image: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg" },
                { name: "Cristiano Ronaldo", profession: "Football Player", image: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg" },
                { name: "Jack Nicklaus", profession: "Golf Player", image:"https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"},
            ],
        }
        this.jsPdfGenerator = this.jsPdfGenerator.bind(this);
    }

    jsPdfGenerator = () => {

        var doc = new jsPDF();

        // doc.text(50, 50, 'Hello world!')

        // doc.text(20, 20, 'Vehicle details')

        // doc.setFont('helvetica')
        // doc.text(20, 60, this.state.currentVehicle.vehicleNumber)


        // var imgData = '../../../../assets/logo.jpg'
        // doc.addImage(imgData, 'png', 30, 45, 40, 0)
        doc.rect(20, 20, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 40, 'S');
        doc.setFontSize(11)
        doc.text(145, 50, 'Beligammana, Mawanella')
        doc.text(145, 55, '+94 778 357 755')
        doc.text(145, 60, '+94 352 050 255')
        doc.text(145, 65, 'cfour@sltnet.lk')
        doc.setFontSize(20)
        doc.text(70, 100, 'Vehicle Cost Report')
        doc.line(65, 102, 140, 102)
        doc.setFontSize(15)
        doc.text(40, 130, 'Vehicle Details')
        doc.setFontSize(12)
        doc.text(40, 145, 'Vehicle Number:')
        doc.text(40, 155, 'Vehicle Registered Year:')
        doc.text(40, 165, 'Vehicle Type:')
        doc.text(40, 175, 'Vehicle Capacity:')
        doc.text(40, 185, 'Price*:')
        doc.text(145, 220, 'Certified By:')
        doc.text(145, 225, 'Transport Department')

        doc.save(' Report.pdf')


    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "My Awesome Report";
        const headers = [["NAME", "PROFESSION"]];

        const data = this.state.people.map(elt => [elt.name, elt.profession]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }





// var doc = new jsPDF('p', 'pt', 'letter');
// var elem = document.getElementById('tbl-customers');
// var imgElements = document.querySelectorAll('#tbl-customers tbody img');
// var data = doc.autoTableHtmlToJson(elem);
// var images = [];
// doc.autoTable(data.columns, data.rows, {
//     bodyStyles: { rowHeight: 30 },
//     drawCell: function (cell, opts) {
//         if (opts.column.dataKey === 7) {
//             var img = imgElements[opts.row.index];
//             images.push({
//                 elem: img,
//                 x: cell.textPos.x,
//                 y: cell.textPos.y
//             });
//         }
//     },
//     afterPageContent: function () {
//         for (var i = 0; i < images.length; i++) {
//             doc.addImage(images[i].elem, 'jpg', images[i].x, images[i].y);
//         }
//     }
// });
// doc.save("table.pdf");









    render() {
        return (
            <div className="container" style={{ marginBottom: "5%" }}>
                <Row>
                    <div class="text-center">
                        <h1 class="head-title">Generate Report For Boarding Places</h1>
                    </div>
                    {/* Search bar & button */}
                    <div className="col-md-4" style={{ marginTop: "5%" }}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search By City"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Download button */}
                    <div className="col-md-4" style={{ marginTop: "5%" }}>
                        <div className="input-group mb-3">
                            <a href="/generate-report-boarding-place">
                                {/* <button class="member-btn btn" onClick={this.jsPdfGenerator}><i><RiFileDownloadLine size="25" /></i> Download</button> */}
                                <button onClick={() => this.exportPDF()}>Generate Report</button>
                            </a>
                        </div>
                    </div>
                </Row>
                {/* Table */}
                <div class="table-box">
                    {/* Table Header Start */}
                    <div class="table-row table-head">
                        <div class="table-cell first-cell">
                            <p>Boarding Place Image</p>
                        </div>
                        <div class="table-cell">
                            <p>Place Name</p>
                        </div>
                        <div class="table-cell">
                            <p>City</p>
                        </div>
                        <div class="table-cell">
                            <p>Email</p>
                        </div>
                        <div class="table-cell">
                            <p>Opening Hours</p>
                        </div>
                        <div class="table-cell">
                            <p>Services</p>
                        </div>
                    </div>
                    {/* Table Header End */}
                    {/* Table Data Row Start */}
                    <div class="table-row">
                        <div class="table-cell first-cell">
                            <img
                                alt="Not available"
                                class="card-img-top"
                                src="http://durbandevelopment.com/wp-content/uploads/2019/08/Web-1.jpg"
                            />
                        </div>
                        <div class="table-cell">
                            <p>Dog Palace</p>
                        </div>
                        <div class="table-cell">
                            <p>Colombo 05</p>
                        </div>
                        <div class="table-cell">
                            <p>dulyakemali@gmail.com</p>
                        </div>
                        <div class="table-cell">
                            <p>8.00a.m-6.00p.m</p>
                        </div>
                        <div class="table-cell">
                            <p>
                                {/* <ol>
                                    <li>Extended Stays - LKR 1000/=</li>
                                    <li>Daycare - LKR 1500/=</li>
                                    <li>Grooming - LKR 500/=</li>
                                </ol> */}
                            </p>
                        </div>
                    </div>
                    {/* Table Data Row End */}
                </div>
            </div>
        )
    }
}