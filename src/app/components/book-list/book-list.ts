import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book-service';
import {BookListItemModel} from '../../models/bookListItem.model';

@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList implements OnInit {

  bookVariable!: BookListItemModel[];

  constructor(private bookService: BookService) {
  }


  ngOnInit(): void {
    this.bookService.getAllBoook().subscribe({
      next: (book) => {
        console.log(book);
        this.bookVariable = book;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Book ist complete, Működik');
      }
    })
  }
}
