export default class Note {
    constructor(id,date,title,summaryContent,content,tagList,createdBy,lastUpdated){
        this.id= id;
        this.date=date;
        this.title= title;
        this.summaryContent =summaryContent;
        this.content = content;
        this.tagList = tagList;
        this.createdBy = createdBy;
        this.lastUpdated = lastUpdated
    }
}