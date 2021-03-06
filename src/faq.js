import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const panelStyles = {
  boxShadow: "none",
  margin: "0px"
};

const summaryStyles = {
  textAlign: "left",
  marginLeft: "0em",
  adding: "0px",
  marginRight: "1px",
  paddingLeft: "1em"
};

function AboutUs() {
  return (
    <div className="card">
      <h2 className="responsiveH2">Dashboard FAQ</h2>

      <ExpansionPanel style={panelStyles}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summaryStyles}
        >
          <h4>Who started the dashboard?</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            Dr Chunyang Chen prototyped the dashboard with his graduate
            students, Han Wang, Chao Wu, Paldeep Singh, Boxuan Lu in the initial
            stage. This dashboard is further developed and maintained by a team
            of{" "}
            <a
              className="citationLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/covid-19-au/covid-19-au.github.io#team-member"
            >
              volunteer students
            </a>
            .
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={panelStyles}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summaryStyles}
        >
          <h4>Why and when was this dashboard started?</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            This dashboard was developed to provide researchers, public health
            authorities and the general Australian public, with a user-friendly
            tool to track the COVID-19 pandemic as it unfolds. This dashboard
            was first shared publicly on 17 March 2020. All the data collected
            and displayed are made freely available through{" "}
            <a
              className="citationLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/covid-19-au/covid-19-au.github.io"
            >
              a GitHub repository
            </a>
            .
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={panelStyles}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summaryStyles}
        >
          <h4>Is the dashboard copyrighted?</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            If you are a government agency, you may use the data for your own
            purposes, provided you credit to Dr Chunyang Chen. All data, mapping
            and analysis (website, copyright 2020 Chunyang Chen, all rights
            reserved) are provided to the public strictly for educational and
            academic research purposes. Screenshots of the website are
            permissible so long as the appropriate credit is outlined.
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={panelStyles}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summaryStyles}
        >
          <h4>How often is the dashboard information updated?</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            The map is maintained hourly throughout the day through a
            combination of manual and automated updating methods. Occasional
            maintenance can result in slower updates.
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={panelStyles}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summaryStyles}
        >
          <h4>What are the sources of data informing the dashboard?</h4>
        </ExpansionPanelSummary>
        {/* <ExpansionPanelDetails>
                    <p>The data sources include the Department of Health in each Australian state (<a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://www.health.nsw.gov.au/news/Pages/default.aspx">NSW</a>,
                <a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://www.dhhs.vic.gov.au/media-hub-coronavirus-disease-covid-19">VIC</a>,
                <a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://www.qld.gov.au/health/conditions/health-alerts/coronavirus-covid-19/current-status/current-status-and-contact-tracing-alerts">QLD</a>,
                <a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://ww2.health.wa.gov.au/News/Media-releases-listing-page">WA</a>,
                <a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/About+us/News+and+media/all+media+releases/">SA</a>,
                <a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://www.health.act.gov.au/about-our-health-system/novel-coronavirus-covid-19">ACT</a>,
                <a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://securent.nt.gov.au/alerts/coronavirus-covid-19-updates">NT</a>,
                <a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://www.dhhs.tas.gov.au/news/2020">TAS</a>), and key news outlets such as <a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://www.abc.net.au/">the ABC</a>. More detailed resources can be seen in our <a className="citationLink" target="_blank" rel="noopener noreferrer" href="https://github.com/covid-19-au/covid-19-au.github.io"> GitHub repository</a>.</p>
                </ExpansionPanelDetails> */}
        <ExpansionPanelDetails>
          <p>
            The data sources include the{" "}
            <a
              className="citationLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Australia"
            >
              wikipedia page
            </a>
            , and key news outlets such as{" "}
            <a
              className="citationLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.abc.net.au/"
            >
              the ABC
            </a>
            . More detailed resources can be seen in our{" "}
            <a
              className="citationLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/covid-19-au/covid-19-au.github.io"
            >
              {" "}
              GitHub repository
            </a>
            .
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={panelStyles}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summaryStyles}
        >
          <h4>Why does data here differ from data on other websites?</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            The dashboard relies on publicly available data from multiple
            sources that do not always agree. Frequent updates of the dashboard
            often result in higher case numbers than other sources that are
            updated less frequently. Other similar websites can have different
            numbers based on a different combination of sources.
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={panelStyles}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summaryStyles}
        >
          <h4>Does the website provide medical guidance?</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            Reliance on the website for medical guidance or use of the website
            in commerce is strictly prohibited. Chunyang Chen hereby disclaims
            any and all representations and warranties with respect to the
            website, including accuracy, fitness for use, and merchantability.
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel style={panelStyles}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summaryStyles}
        >
          <h4>Who can I talk to for more information about the dashboard?</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>
            General questions about the dashboard can be directed to{" "}
            <a className="citationLink" href="mailto:Chunyang.Chen@monash.edu">
              Chunyang.Chen@monash.edu
            </a>
            .{" "}
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default AboutUs;
