import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Utils} from '../utils';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  countries: string[];
  filteredCountries: Observable<String[]>;

  platformsFormGroup: FormGroup;
  entityFormGroup: FormGroup;
  locationFormGroup: FormGroup;
  basicInformationFormGroup: FormGroup;
  collectedDataFormGroup: FormGroup;
  contactFormGroup: FormGroup;

  website = false;
  mobileApp = false;
  entityType: string;
  businessName: string;
  businessLocation: string;
  websiteURL: string;
  websiteName: string;
  mobileAppName: string;

  collectEmail = false;
  collectFirstAndLastName = false;
  collectPhoneNumber = false;
  collectAddress = false;

  askForUserLocation = 'false';
  useAnalytics = 'false';

  canContactByEmail = false;
  canContactByPhone = false;
  canContactByWebsite = false;

  contactEmail: string;
  contactPhone: string;
  contactWebsite: string;

  urlRegex = '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';
  phoneRegex = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.countries = Utils.getCountries();

    this.platformsFormGroup = this.formBuilder.group({
      requiredCtrl: ['', Validators.requiredTrue],
    });
    this.entityFormGroup = this.formBuilder.group({
      requiredCtrl: ['', Validators.required],
      requiredSelectedCtrl: ['', Validators.required]
    });
    this.locationFormGroup = this.formBuilder.group({
      requiredCtrl: ['', Validators.required],
    });
    this.basicInformationFormGroup = this.formBuilder.group( {
      requiredCtrl: ['', Validators.required],
      urlCtrl: ['', Validators.pattern(this.urlRegex)]
    });
    this.collectedDataFormGroup = this.formBuilder.group( {
      requiredSelectedCtrl: ['', Validators.requiredTrue],
      requiredCtrl: ['', Validators.required],
    });
    this.contactFormGroup = this.formBuilder.group({
      requiredSelectedCtrl: ['', Validators.requiredTrue],
      emailCtrl: ['', Validators.email],
      phoneCtrl: ['', Validators.pattern(this.phoneRegex)],
      urlCtrl: ['', Validators.pattern(this.urlRegex)]
    });
    this.setDefaultEntityType();
    this.filteredCountries = this.locationFormGroup.get('requiredCtrl').valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );
  }

  setDefaultEntityType() {
    this.entityType = 'individual';
  }

  private filter(value: string): string[] {
    let filterValue = '';
    if (value != null) {
      filterValue = value.toLowerCase();
    }

    return this.countries.filter(option => option.toLowerCase().includes(filterValue));
  }
}

