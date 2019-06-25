import { withInfo } from "@storybook/addon-info";

export default withInfo({
  inline: true,
  source: true,
  styles: {
    header: {
      body: {
        marginBottom: 0,
        paddingBottom: 0,
        paddingTop: 0
      },
      h1: {
        display: "inline",
        fontSize: "25px",
        marginBottom: 0,
        marginRight: "20px"
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
      padding: "0px 10px"
    }
  }
});
