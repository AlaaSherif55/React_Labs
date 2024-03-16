import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return(
        <div className="footer container-fluid bg-black text-white">
    <div className="row">
        <div className="col leftside">
            <div>
                <h2>get in touch </h2>
            </div>
            <table>
                <tr>
                    <th className="p-1">
                        <i className="fa fa-folder"></i>
                    </th>
                    <th className="p-1">
                       alaa.sherif.fathi@gmail.com
                    </th>
                </tr>
                <tr>
                    <th className="p-1">
                        <i className="fa fa-phone"></i>
                    </th>
                    <th className="p-1">
                       01129804555
                    </th>
                </tr>
            </table>
        </div>
        <div className="col middleside text-center d-flex align-items-center justify-content-center">
            <span className="border border-light p-2 w-50">CONTACT ME</span>
        </div>
        <div className="col rightside d-flex align-items-center justify-content-end">
            <div className="icons w-25 d-flex align-items-center justify-content-between">
            <FontAwesomeIcon icon={faLinkedinIn} className="fa-lg" />
          <FontAwesomeIcon icon={faFacebook} className="fa-lg" />
      <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
            </div>
        </div>
    </div>
</div>
    );
}
 
export default Footer;