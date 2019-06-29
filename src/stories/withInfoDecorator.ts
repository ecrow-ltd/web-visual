import { withInfo } from "@storybook/addon-info";

export default withInfo({
  inline: true,
  source: true,
  styles: {
    header: {
      body: {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        marginBottom: 0,
        paddingBottom: 0,
        paddingTop: 0
      },
      h1: {
        display: "inline",
        fontSize: "25px",
        marginBottom: 0,
        marginRight: "20px",
        marginTop: 0,
        padding: 0
      },
      h2: {
        color: "#999",
        display: "inline"
      }
    },
    infoBody: {
      backgroundColor: "#e8edf4",
      borderRadius: 5,
      lineHeight: "2",
      padding: "10px 10px"
    }
  }
});
