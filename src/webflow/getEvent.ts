import { capitalizeFirstLetter } from "../templates/nashville";
import { Center } from "../types/webflow";

/**
 * Returns an object containing the fields for creating a new event item.
 * @param {string} center.name - Name of the center associated with the event.
 * @param {string} center.hubspotFormID - ID of the HubSpot form associated with the event.
 * @param {string} centerID - ID of the center associated with the event.
 * @returns {Object} Object containing the fields for creating a new event item.
 */
const getEvent = (center: Center, centerID: string) => ({
  _archived: false,
  _draft: true,
  blurb: "Try TOCA For FREE!",
  "hubspot-form-id": "9af1b34b-0a4b-4308-821f-73b277636efd",
  name: `${capitalizeFirstLetter(center.name)} Free Kickoff`,
  "slug": `${center.name.toLowerCase().replace(/ /g, '')}-free-kickoff`,
  "hero-slider-image-first": {
    fileId: "6451a7ebe505d96529e2d876",
    url: "https://uploads-ssl.webflow.com/60c7be61132e3ad0b40a333d/6451a7ebe505d96529e2d876_644aef63132d320b5cb0fea0_63263b3bc587850566dd1b0b_210608_ha_toca_training_028_LowRes%20(1).jpeg",
    alt: null,
    description:
      `<h4 id="">Next Generation Soccer Training</h4><p id="">TOCA offers technology-enhanced soccer training designed to produce rapid skill improvement and develop well-rounded players. The key is TOCA’s proprietary technology, including the Touch Trainer, Smart Targets, Studio Screens, and personalized data tracking, that take your game to the next level.&nbsp;</p><p id="">To learn more about our training program, visit <a href="/center-programs/${center.name.toLowerCase()}-1abouttocafootball" id="">About TOCA Football</a>.</p><h4 id="">Try TOCA For FREE!</h4><p id="">All new guests get a free player assessment!</p><ul id=""><li id="">Try our technology including the Touch Trainer and Smart Targets</li><li id="">Discuss your training goals with our trainers</li><li id="">Find time that works for you! We have flexible schedules and look forward to seeing you!</li></ul><h4 id="">How To Sign Up For a FREE Kickoff</h4><p id="">Fill out the form on this page and select <strong id="">Free Kickoff</strong> under program. Our center will contact you shortly to book your free kickoff session!</p><h4 id="">‍</h4><p id="">‍</p>`,
  },
  "center": centerID,
});
  
export default getEvent;
