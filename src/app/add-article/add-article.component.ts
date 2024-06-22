import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  article = {
    nom: '',
    nomenclature: ''
  };

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.addArticle(this.article).subscribe(response => {
      alert('Article ajouté avec succès !');
      this.article = { nom: '', nomenclature: '' };
    });
  }
}
