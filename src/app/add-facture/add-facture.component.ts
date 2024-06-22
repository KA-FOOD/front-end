import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  facture = {
    date: '',
    fournisseur: '',
    article_id: '',
    quantite: 0,
    montant_ht: 0
  };
  articles = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    this.apiService.searchArticle('').subscribe(data => {
      this.articles = data;
    });
  }

  onSubmit() {
    this.apiService.addFacture(this.facture).subscribe(response => {
      alert('Facture ajoutée avec succès !');
      this.facture = { date: '', fournisseur: '', article_id: '', quantite: 0, montant_ht: 0 };
    });
  }
}
