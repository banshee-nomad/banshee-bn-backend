const newTripStyle = `
  .top-margin{ margin-top: 20px; }
  .top-margin-small-xx{ margin-top: 20px; }
  .table-container{ overflow-x:auto; }
  .container{ width: 90%; border-radius: 10px; padding: 5px; margin-left: 5%; margin-right: 5%; } 
  .logo{ width: 150px }
  .title{ font-family: 'Roboto', sans-serif; text-align: center; margin-bottom: 20px; }
  .show-on-medium-large-up { display: block }
  .row{ width: 100% }
  .half-row{ width: 50%;}
  .float-left{ float: left }
  .float-right{ float: right }
  .dataclip-header{ width: 70%; padding: 2vh 2.5%; font-family: Arial, Helvetica, sans-serif; color:white; background-color: rgb(205, 215, 223); font-size: 14px; }
  .text-format{ white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .text-format:hover{ text-overflow: clip; }
  .dataclip-body{ padding: 2vh 2.5%; background-color: rgb(248, 248, 248); width: 70%;}
  .dataclip-body-line{ padding: 2vh 20px; margin-left: 0px; width: 250px; background-color: rgb(248, 248, 248); }
  .dataclip-header-2{ width: 96%; padding: 5px 2%; font-family: Arial, Helvetica, sans-serif; text-align: left;    font-weight: bold; text-align: right; }
  .dataclip-header-3{ width: 35%; padding: 2vh 1%; font-family: Arial, Helvetica, sans-serif; color:white ;background-color: rgb(205, 215, 223); font-size: 14px; }
  .dataclip-body-2{ padding: 2vh 2%; width: 96%; text-align: right;}
  .align-icons{ vertical-align: middle; padding-right: 5px;}
  .data-table{ border-collapse: collapse; width: 100%; border: solid 1px rgb(192, 191, 191)}
  .table-header{ color: gray; padding: 5px 20px; text-align: left; font-family: Arial, Helvetica, sans-serif; font-size: 14px; word-spacing: 5px; }
  .reason{ padding: 5vh 0px 5px 0px; background-color: rgb(248, 248, 248); width: 100%; margin-top: 0px; }
  td{ padding: 12px 20px; text-align: left; font-family: 'Roboto', sans-serif; font-size: 0.9em; }
  tr:nth-child(even){background-color: #f2f2f2}
  @media (max-width: 600px) {
       .hide-on-small-only{ display: none; }
      .dataclip-header{ width: 92%; padding: 2px 4%; }
      .dataclip-body{ width: 92%; padding: 2px 4%; }
      .logo{ width: 100%; }
      .half-row{ width: 100%; }   
      .dataclip-header-2{ width: 100%; padding: 5px 0px; font-family: Arial, Helvetica, sans-serif; text-align: left ;font-weight: bold; text-align: center; }
      .dataclip-body-2{ width: 100%; padding: 2px 0px;}
      .dataclip-body-2 div { text-align: center; }
      .dataclip-body-line{ width: 92%; padding: 2px 4%;}
      .dataclip-header-3 { width: 96%; padding: 2vh 2%; font-family: Arial, Helvetica, sans-serif; color: white; background-color: rgb(205, 215, 223); font-size: 14px; }
      .container{ width: 100%; margin-left: 0%; margin-right: 0%; } 
  }
  @media (min-width: 601px){
     .hide-on-medium-large-up{
       display: none;
     }
  }
`;

const inAppStyle = `
  *{ margin: 0; padding: 0; }
  .container{ width: 100%; height: 100vh; display: flex; flex-flow: row wrap ;justify-content: center; margin-top: 100px; }
  ul { list-style-type: none; margin: 0; padding: 0; }
  .dropbtn { background-color: gray; color: white; padding: 16px; font-size: 28px; border: none; cursor: pointer; border-radius: 50%;}
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 300px;
  width: 350px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
/* Links inside the dropdown */
.dropdown-content li {
  color: black;
  padding: 12px 20px;
  min-height: 30px;
  text-decoration: none;
  display: block;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden
}
/* Change color of dropdown links on hover */
.dropdown-content li:hover {background-color: #f1f1f1; cursor: pointer}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  color: #D6DBDF;
}
`;

export { newTripStyle, inAppStyle };
