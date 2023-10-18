
export function downloadIcsFile(iCalFileContent: string) {
    const iCalFile = new File([iCalFileContent], "test.ics", {type: "text/calendar;charset=utf-8"});
    const element = document.createElement("a");
    element.href = URL.createObjectURL(iCalFile);
    element.target = "_blank";
    element.download = "diensten.ics";
    element.click();
}