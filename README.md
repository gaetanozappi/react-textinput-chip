# React Js: react-textinput-chip

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/react-textinput-chip.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/react-textinput-chip)
[![github home](http://img.shields.io/npm/v/react-textinput-chip.svg?style=flat)](https://www.npmjs.com/package/react-textinput-chip)
[![github home](https://img.shields.io/badge/gaetanozappi-react--textinput--chip-blue.svg?style=flat)](https://github.com/gaetanozappi/react-textinput-chip)
[![npm](https://img.shields.io/npm/dm/react-textinput-chip.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-textinput-chip)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-textinput-chip.svg?style=flat)](https://github.com/gaetanozappi/react-textinput-chip/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-textinput-chip.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-textinput-chip/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-textinput-chip.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-textinput-chip/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-textinput-chip.svg)]()

<img src="https://github.com/gaetanozappi/react-textinput-chip/raw/master/screenshot/react-textinput-chip.gif" />

Demo: [Codesandbox](https://codesandbox.io/s/material-demo-n1it6 "Codesandbox")

-   [Usage](#-usage)
-   [License](#-license)

## 📖 Getting started

`$ npm install react-textinput-chip --save`

## 💻 Usage

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import deburr from "lodash/deburr";
import ReactJson from "react-json-view";
import TextInputChip from "react-textinput-chip";
import MenuItem from "./components/MenuItem";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const styles = theme => ({
  root: {
    "& label.Mui-focused": {
      color: "#007bff"
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#cacccf"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#007bff"
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "#ffb41b"
    }
  }
});

let MyTextField = withStyles(styles)(TextField);

const suggestions = [
  {
    name: "Regina",
    surname: "Hampton",
    email: "regina.hampton@email.com",
    address: "506 Macon Street, Waterford, Washington, 706"
  },
  {
    name: "Mosley",
    surname: "Navarro",
    email: "mosley.navarro@email.com",
    address: "172 Wythe Place, Smock, Tennessee, 9071"
  },
  {
    name: "Lillie",
    surname: "Steele",
    email: "lillie.steele@email.com",
    address: "727 Brightwater Avenue, Welda, North Dakota, 453"
  },
  {
    name: "Liz",
    surname: "Cleveland",
    email: "liz.cleveland@email.com",
    address: "447 Lewis Place, Kerby, Alabama, 6018"
  },
  {
    name: "Rogers",
    surname: "Boyd",
    email: "rogers.boyd@email.com",
    address: "912 Hooper Street, Masthope, Maine, 4501"
  },
  {
    name: "Bullock",
    surname: "Glenn",
    email: "bullock.glenn@email.com",
    address: "921 Seton Place, Downsville, Idaho, 8474"
  },
  {
    name: "Everett",
    surname: "Bradshaw",
    email: "everett.bradshaw@email.com",
    address: "994 Montague Street, Driftwood, Puerto Rico, 6436"
  },
  {
    name: "Mccormick",
    surname: "Walls",
    email: "mccormick.walls@email.com",
    address: "809 Decatur Street, Bawcomville, Indiana, 8329"
  },
  {
    name: "Weiss",
    surname: "Garcia",
    email: "weiss.garcia@email.com",
    address: "347 Hinckley Place, Greer, Iowa, 4916"
  },
  {
    name: "Sonja",
    surname: "Valdez",
    email: "sonja.valdez@email.com",
    address: "266 Elm Place, Hanover, Mississippi, 4444"
  },
  {
    name: "Little",
    surname: "Cote",
    email: "little.cote@email.com",
    address: "383 Lott Avenue, Cartwright, Utah, 9826"
  },
  {
    name: "Juliet",
    surname: "Dunlap",
    email: "juliet.dunlap@email.com",
    address: "126 Hastings Street, Lydia, Connecticut, 8128"
  },
  {
    name: "Sheena",
    surname: "Brady",
    email: "sheena.brady@email.com",
    address: "414 Pulaski Street, Choctaw, Georgia, 2412"
  },
  {
    name: "Bobbi",
    surname: "Alexander",
    email: "bobbi.alexander@email.com",
    address: "956 Ide Court, Madaket, Wisconsin, 2251"
  },
  {
    name: "Schneider",
    surname: "Mosley",
    email: "schneider.mosley@email.com",
    address: "425 Love Lane, Mansfield, Oregon, 519"
  },
  {
    name: "Griffin",
    surname: "Camacho",
    email: "griffin.camacho@email.com",
    address: "655 Provost Street, Venice, Arkansas, 7752"
  },
  {
    name: "Chavez",
    surname: "Bauer",
    email: "chavez.bauer@email.com",
    address: "701 Williamsburg Street, Brule, Virginia, 2962"
  },
  {
    name: "Kent",
    surname: "Nicholson",
    email: "kent.nicholson@email.com",
    address: "556 Bushwick Avenue, Klondike, South Carolina, 9899"
  },
  {
    name: "Lauren",
    surname: "Stephenson",
    email: "lauren.stephenson@email.com",
    address: "452 Kermit Place, Columbus, South Dakota, 5995"
  },
  {
    name: "Debra",
    surname: "Meadows",
    email: "debra.meadows@email.com",
    address: "542 Powell Street, Nadine, New Jersey, 6918"
  },
  {
    name: "Robinson",
    surname: "Shelton",
    email: "robinson.shelton@email.com",
    address: "181 Central Avenue, Edgar, American Samoa, 4913"
  },
  {
    name: "Roth",
    surname: "Boone",
    email: "roth.boone@email.com",
    address: "895 Granite Street, Hickory, Wyoming, 9024"
  },
  {
    name: "Mattie",
    surname: "Lynch",
    email: "mattie.lynch@email.com",
    address: "998 Grove Place, Watchtower, Massachusetts, 2874"
  },
  {
    name: "Frances",
    surname: "Ellison",
    email: "frances.ellison@email.com",
    address: "315 Banner Avenue, Makena, Alaska, 7395"
  },
  {
    name: "Catherine",
    surname: "Dickerson",
    email: "catherine.dickerson@email.com",
    address: "605 Oceanview Avenue, Gardners, West Virginia, 6136"
  },
  {
    name: "Whitfield",
    surname: "Donaldson",
    email: "whitfield.donaldson@email.com",
    address: "326 Interborough Parkway, Dunbar, Maryland, 401"
  },
  {
    name: "Hayes",
    surname: "Herman",
    email: "hayes.herman@email.com",
    address: "161 Keen Court, Westboro, Delaware, 4142"
  },
  {
    name: "Rodriquez",
    surname: "Craft",
    email: "rodriquez.craft@email.com",
    address: "924 Calder Place, Comptche, Illinois, 4976"
  },
  {
    name: "Russell",
    surname: "Oneal",
    email: "russell.oneal@email.com",
    address: "217 Kingston Avenue, Thomasville, Virgin Islands, 1829"
  },
  {
    name: "Ramos",
    surname: "Skinner",
    email: "ramos.skinner@email.com",
    address: "285 Baughman Place, Baker, Missouri, 6189"
  },
  {
    name: "Eaton",
    surname: "Salinas",
    email: "eaton.salinas@email.com",
    address: "489 Union Street, Vernon, Marshall Islands, 2136"
  },
  {
    name: "Parsons",
    surname: "Wade",
    email: "parsons.wade@email.com",
    address: "967 Dodworth Street, Harborton, Montana, 696"
  },
  {
    name: "Mendoza",
    surname: "Chandler",
    email: "mendoza.chandler@email.com",
    address: "344 Hudson Avenue, Thatcher, Kentucky, 2071"
  },
  {
    name: "Valentine",
    surname: "French",
    email: "valentine.french@email.com",
    address: "216 Berry Street, Beaverdale, Colorado, 1766"
  },
  {
    name: "Eva",
    surname: "Reeves",
    email: "eva.reeves@email.com",
    address: "960 Landis Court, Caron, Rhode Island, 3102"
  },
  {
    name: "Cunningham",
    surname: "Sweet",
    email: "cunningham.sweet@email.com",
    address: "784 Woodhull Street, Soudan, Palau, 4977"
  },
  {
    name: "Lindsey",
    surname: "Savage",
    email: "lindsey.savage@email.com",
    address:
      "381 Kenilworth Place, Sisquoc, Federated States Of Micronesia, 238"
  },
  {
    name: "Virginia",
    surname: "Molina",
    email: "virginia.molina@email.com",
    address: "397 Wolcott Street, Townsend, Vermont, 1052"
  },
  {
    name: "Watkins",
    surname: "Hull",
    email: "watkins.hull@email.com",
    address: "440 Friel Place, Toftrees, Oklahoma, 5860"
  },
  {
    name: "Teresa",
    surname: "Knapp",
    email: "teresa.knapp@email.com",
    address: "394 Colby Court, Coral, North Carolina, 4182"
  },
  {
    name: "Barron",
    surname: "Callahan",
    email: "barron.callahan@email.com",
    address: "125 Ashland Place, Waiohinu, Ohio, 7142"
  },
  {
    name: "Bradshaw",
    surname: "Roy",
    email: "bradshaw.roy@email.com",
    address: "194 Veterans Avenue, Alden, Kansas, 3236"
  },
  {
    name: "Vargas",
    surname: "Keller",
    email: "vargas.keller@email.com",
    address: "102 Times Placez, Tooleville, Nevada, 7208"
  },
  {
    name: "Levine",
    surname: "Fitzgerald",
    email: "levine.fitzgerald@email.com",
    address: "486 Tapscott Avenue, Kirk, Pennsylvania, 8353"
  },
  {
    name: "Connie",
    surname: "Park",
    email: "connie.park@email.com",
    address: "953 Caton Place, Baden, Hawaii, 6875"
  },
  {
    name: "Webster",
    surname: "Mooney",
    email: "webster.mooney@email.com",
    address: "372 Bragg Court, Marne, Minnesota, 1062"
  },
  {
    name: "Allie",
    surname: "Dodson",
    email: "allie.dodson@email.com",
    address: "118 Harman Street, Edneyville, Arizona, 6451"
  },
  {
    name: "Kline",
    surname: "Alford",
    email: "kline.alford@email.com",
    address: "148 Lorraine Street, Libertytown, Florida, 5568"
  },
  {
    name: "Trujillo",
    surname: "Ellis",
    email: "trujillo.ellis@email.com",
    address: "598 Village Court, Rodanthe, Nebraska, 8622"
  },
  {
    name: "Frye",
    surname: "Wise",
    email: "frye.wise@email.com",
    address: "127 Pierrepont Place, Dupuyer, Northern Mariana Islands, 6382"
  },
  {
    name: "Ashley",
    surname: "Medina",
    email: "ashley.medina@email.com",
    address: "156 Beaver Street, Woodlands, Guam, 9604"
  },
  {
    name: "Stokes",
    surname: "Nelson",
    email: "stokes.nelson@email.com",
    address: "502 Bevy Court, Jackpot, Louisiana, 8235"
  },
  {
    name: "Alford",
    surname: "Weaver",
    email: "alford.weaver@email.com",
    address: "901 Cornelia Street, Spokane, District Of Columbia, 7646"
  },
  {
    name: "Mcleod",
    surname: "Hunt",
    email: "mcleod.hunt@email.com",
    address: "482 Ludlam Place, Vowinckel, Michigan, 4598"
  },
  {
    name: "Sybil",
    surname: "Winters",
    email: "sybil.winters@email.com",
    address: "962 Kiely Place, Chamberino, California, 5225"
  },
  {
    name: "Chandler",
    surname: "Pacheco",
    email: "chandler.pacheco@email.com",
    address: "488 Harden Street, Canby, New York, 7722"
  },
  {
    name: "Fisher",
    surname: "Porter",
    email: "fisher.porter@email.com",
    address: "525 Hendrix Street, Wiscon, New Mexico, 8549"
  },
  {
    name: "Lucas",
    surname: "Davis",
    email: "lucas.davis@email.com",
    address: "527 Garden Street, Otranto, Texas, 4584"
  },
  {
    name: "Petty",
    surname: "Pate",
    email: "petty.pate@email.com",
    address: "738 Gunnison Court, Itmann, Washington, 9121"
  },
  {
    name: "Peters",
    surname: "Gaines",
    email: "peters.gaines@email.com",
    address: "235 Girard Street, Caroleen, Tennessee, 8832"
  },
  {
    name: "Jan",
    surname: "Flowers",
    email: "jan.flowers@email.com",
    address: "702 Beverly Road, Caroline, North Dakota, 1450"
  },
  {
    name: "Deborah",
    surname: "Jacobson",
    email: "deborah.jacobson@email.com",
    address: "515 Tennis Court, Lorraine, Alabama, 9509"
  },
  {
    name: "Bass",
    surname: "Blevins",
    email: "bass.blevins@email.com",
    address: "866 Trucklemans Lane, Rossmore, Maine, 6478"
  },
  {
    name: "Maritza",
    surname: "Stein",
    email: "maritza.stein@email.com",
    address: "596 Albee Square, Genoa, Idaho, 412"
  },
  {
    name: "Isabel",
    surname: "Mcfarland",
    email: "isabel.mcfarland@email.com",
    address: "633 Stryker Court, Alamo, Puerto Rico, 2328"
  },
  {
    name: "Vance",
    surname: "Bush",
    email: "vance.bush@email.com",
    address: "543 Horace Court, Zeba, Indiana, 528"
  },
  {
    name: "Fitzgerald",
    surname: "Byrd",
    email: "fitzgerald.byrd@email.com",
    address: "556 Hegeman Avenue, Glasgow, Iowa, 545"
  },
  {
    name: "Lessie",
    surname: "Delacruz",
    email: "lessie.delacruz@email.com",
    address: "427 Paerdegat Avenue, Sanford, Mississippi, 7206"
  },
  {
    name: "Pamela",
    surname: "Gallagher",
    email: "pamela.gallagher@email.com",
    address: "620 Louis Place, Winston, Utah, 3358"
  },
  {
    name: "Nora",
    surname: "Berger",
    email: "nora.berger@email.com",
    address: "940 Greenwood Avenue, Coultervillle, Connecticut, 2787"
  },
  {
    name: "Silvia",
    surname: "Monroe",
    email: "silvia.monroe@email.com",
    address: "980 Vanderveer Place, Berwind, Georgia, 348"
  },
  {
    name: "Amalia",
    surname: "Roberson",
    email: "amalia.roberson@email.com",
    address: "444 Bay Street, Woodlake, Wisconsin, 770"
  },
  {
    name: "Gardner",
    surname: "Fulton",
    email: "gardner.fulton@email.com",
    address: "877 Reed Street, Swartzville, Oregon, 1852"
  },
  {
    name: "James",
    surname: "Beasley",
    email: "james.beasley@email.com",
    address: "442 Java Street, Dahlen, Arkansas, 5561"
  },
  {
    name: "Gordon",
    surname: "Crawford",
    email: "gordon.crawford@email.com",
    address: "236 Irving Avenue, Shindler, Virginia, 7767"
  },
  {
    name: "Walters",
    surname: "Rodriguez",
    email: "walters.rodriguez@email.com",
    address: "847 Clara Street, Joppa, South Carolina, 2859"
  },
  {
    name: "Willie",
    surname: "Guerra",
    email: "willie.guerra@email.com",
    address: "149 Richardson Street, Glidden, South Dakota, 7043"
  },
  {
    name: "Marla",
    surname: "Carrillo",
    email: "marla.carrillo@email.com",
    address: "918 Boulevard Court, Norfolk, New Jersey, 3312"
  },
  {
    name: "Marsha",
    surname: "Greer",
    email: "marsha.greer@email.com",
    address: "708 Kensington Street, Knowlton, American Samoa, 3326"
  },
  {
    name: "Leann",
    surname: "Rowland",
    email: "leann.rowland@email.com",
    address: "675 Agate Court, Odessa, Wyoming, 4910"
  },
  {
    name: "Moody",
    surname: "Atkins",
    email: "moody.atkins@email.com",
    address: "630 Moore Place, Hartsville/Hartley, Massachusetts, 1099"
  },
  {
    name: "Lola",
    surname: "Alston",
    email: "lola.alston@email.com",
    address: "996 Jackson Street, Snyderville, Alaska, 4664"
  },
  {
    name: "Ingrid",
    surname: "Velasquez",
    email: "ingrid.velasquez@email.com",
    address: "650 Linden Street, Edmund, West Virginia, 5926"
  },
  {
    name: "Bailey",
    surname: "Maynard",
    email: "bailey.maynard@email.com",
    address: "955 Bridgewater Street, Ribera, Maryland, 1362"
  },
  {
    name: "Torres",
    surname: "Duffy",
    email: "torres.duffy@email.com",
    address: "165 National Drive, Russellville, Delaware, 708"
  }
].map((suggestion, i) => ({
  label: suggestion.email,
  name: suggestion.name,
  surname: suggestion.surname,
  address: suggestion.address,
  email: suggestion.email,
  picture: "https://picsum.photos/id/" + i + "/200/200"
}));

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      sugg: suggestions,
      options: [],
      userSelect: suggestions[2],
      open: false,
      name: "",
      surname: "",
      address: ""
    };
  }

  onSearch = q => {
    const { sugg } = this.state;
    console.log("onSearchHome", q);
    const inputValue = deburr(q.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    let options =
      inputLength === 0
        ? []
        : sugg.filter(suggestion => {
            const keep =
              count < 5 &&
              suggestion.label &&
              suggestion.label.slice(0, inputLength).toLowerCase() ===
                inputValue;
            if (keep) count += 1;
            return keep;
          });
    this.setState({ options });
  };

  getLabel(...props) {
    return props
      .reduce((acc, val) => {
        return acc + "" + val.charAt(0);
      }, "")
      .toUpperCase();
  }

  onChange = userSelect => {
    this.setState({ userSelect });
  };

  handleDialog = open => {
    this.setState({ open });
  };

  onChangeField = field => ({ target: { value } }) => {
    let state = {};
    state[field] = value;
    this.setState(state);
  };

  addUser = () => {
    const { name, surname, address, sugg } = this.state;
    let obj = {
      value: name,
      label: (name + "." + surname + "@email.com").toLowerCase(),
      name,
      surname,
      email: (name + "." + surname + "@email.com").toLowerCase(),
      address,
      picture: "https://picsum.photos/id/" + sugg.length + "/200/200"
    };
    this.setState(
      previousState => ({
        name: "",
        surname: "",
        address: "",
        sugg: [...previousState.sugg, obj]
      }),
      () => {
        this.handleDialog(false);
      }
    );
  };

  render() {
    const { userSelect, options, open } = this.state;

    return (
      <>
        {userSelect && <ReactJson src={userSelect} theme="solarized" />}
        <br />
        <br />
        <TextInputChip
          fullWidth
          options={options}
          onSearch={this.onSearch}
          onChange={userSelect => this.onChange(userSelect)}
          //selectedItem={userSelect}
          //renderMenuItemChildren={option => `${option.name} ${option.surname} (${option.email})` }
          renderMenuItemChildren={option => <MenuItem option={option} />}
          //labelKey="address"
          labelKey={option =>
            `${option.name} ${option.surname} (${option.address})`
          }
          placeholder={"Cerca"}
          label={"User"}
          noResult={a => this.handleDialog(a)}
          noFound={"No found result. Add user."}
          backgroundColorChip={"#007bcc"}
          colorTextChip={"#fff"}
          colorDelete={"#d4d7d6"}
          loading
          backgroundColorLoading={"#f59c42"}
          avatar={option => <Avatar alt={option.label} src={option.picture} />}
          /*avatar={option => (
            <Avatar>{this.getLabel(option.name, option.surname)}</Avatar>
          )}*/
          //avatar={() => <FaceIcon style={{ color: "#fff" }} />}
          //deleteIcon={() => <DoneIcon />}
          /*backgroundMenuItem={"#ffb41b"}
          colorMenuItem={"#007bff"}
          colorMenuItemSelect={"#ffb41b"}
          backgroundItemSelect={"#007bff"}*/
        />

        <Dialog
          open={open}
          onClose={() => this.handleDialog(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
            Create a new user
          </DialogTitle>
          <DialogContent>
            <MyTextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              onChange={this.onChangeField("name")}
            />
            <MyTextField
              margin="dense"
              id="surname"
              label="Surname"
              type="text"
              fullWidth
              onChange={this.onChangeField("surname")}
            />
            <MyTextField
              margin="dense"
              id="address"
              label="Address"
              type="text"
              fullWidth
              onChange={this.onChangeField("address")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleDialog(false)} color="primary">
              Close
            </Button>
            <Button onClick={() => this.addUser()} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
```

MenuItem:
```javascript
import PropTypes from "prop-types";
import React from "react";

const MenuItem = ({ option }) => {
  return (
    <div>
      <img
        alt={option.label}
        src={option.picture}
        style={{
          height: "24px",
          marginRight: "10px",
          width: "24px",
          verticalAlign: "middle",
          borderRadius: "50%"
        }}
      />
      <span>
        {option.name} ({option.email})
      </span>
    </div>
  );
};

MenuItem.propTypes = {
  option: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
  }).isRequired
};

export default MenuItem;
```

## 💡 Props

|Prop|Type|Default|Note|
| - | - | - | - |
|fullWidth|`boolean`|`false`||
|options|`array`|||
|onSearch|`function`|||
|onChange|`function`|||
|selectedItem|`obj`|||
|renderMenuItemChildren|`function: optional`|`obj.label`||
|labelKey|`function: optional`|`obj.label`||
|placeholder|`string`|`Search`||
|label|`string`|`Search`||
|noResult|`function`|||
|noFound|`string`|`No matches found.`||
|backgroundColorChip|`string`|![#e0e0e0](https://placehold.it/15/e0e0e0/000000?text=+) `#e0e0e0`||
|colorTextChip|`string`|![#000000](https://placehold.it/15/000000/000000?text=+) `#000000`||
|colorDelete|`string`|![#00000042](https://placehold.it/15/00000042/000000?text=+) `rgba(0, 0, 0, 0.26)`||
|avatar|`function: optional`|||
|deleteIcon|`function: optional`|||
|colorMenuItem|`string`|![#000000](https://placehold.it/15/000000/000000?text=+) `#000000`||
|backgroundMenuItem|`string`|![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff`||
|colorMenuItemSelect|`string`|![#000000](https://placehold.it/15/000000/000000?text=+) `#000000` ||
|backgroundItemSelect|`string`|![#e0e0e0](https://placehold.it/15/e0e0e0/000000?text=+) `#e0e0e0`||
|loading|`boolean`|`false`||
|backgroundColorLoading|`string`|![#f59c42](https://placehold.it/15/f59c42/000000?text=+) `#f59c42`||


## 📜 License
This library is provided under the Apache License.
