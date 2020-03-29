import { Component, OnInit,EventEmitter } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  entries: Diary[] =[
    new Diary(1, "The Beginning", "It was such a long day, that i had forgotten to write","prose", new Date(2019,2,25)),
    new Diary(2, "Lost", "I've lived three hundred lifetimes,i know three hundred ways to die,I can't stop coming back here, I know, because I've tried, An endless cosmic circle, Where my soul is on the move, Ive lived three hundred lifetimes, I'm stuck in an empty, hollow, groove","poetry", new Date(2019,3,19))
    ,new Diary(3, "Humbling", "Story tiiiime,....","prose", new Date(2019,5,12)),
    new Diary(4, "New Yarn", "We are mooooving","prose", new Date(2019,7,5)),
    new Diary(5, "Falling", "Roses are red, violets are blue, hello, and How are you","poetry", new Date(2019,12,31))

  ]
  addNewEntry(entry){
    let entryid = this.entries.length;
    entry.id = entryid+1;
    entry.date = new Date(entry.date)
    this.entries.push(entry)
  }
  deleteEntry(index){
    let toDelete = confirm(`Are you sure you want to delete this entry ${this.entries[index].title}`)

    if(toDelete){
      this.entries.splice(index,1)
    }
  }
  toggleContent(index){
    this.entries[index].showContent = !this.entries[index].showContent;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
